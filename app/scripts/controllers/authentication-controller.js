'use strict';

window.app.controller('AuthenticationController', function ($scope, $ionicPlatform, $state, firebaseAuth, $cordovaFacebook, localStorage, $q, firebaseConfig, $firebaseObject, userConfig) {
    $scope.authenticating = true;
    $scope.loggedIn       = false;

    var authWithCustomToken = function (token) {
        return firebaseAuth.$authWithCustomToken(token);
    };

    var authWithFacebook = function () {
        if (window.cordova) {
            return $cordovaFacebook.getLoginStatus()
                .then(function (response) {
                    if (!response || response.status !== 'connected') {
                        return $cordovaFacebook.login(['public_profile']);
                    }

                    return response;
                })
                .then(function () {
                    return $cordovaFacebook.getAccessToken();
                })
                .then(function (accessToken) {
                    return firebaseAuth.$authWithOAuthToken('facebook', accessToken);
                });
        }
        else {
            return firebaseAuth.$authWithOAuthPopup('facebook');
        }
    };

    var authenticateWith = function (provider) {
        var authData = firebaseAuth.$getAuth();
        var token    = localStorage.get('token');

        if (!authData) {
            if (provider === 'facebook') {
                return authWithFacebook();
            }
            else if (provider === 'custom') {
                return authWithCustomToken(token);
            }
            else if (provider === 'auto') {
                if (token) {
                    return authWithCustomToken(token);
                }
                else {
                    return authWithFacebook();
                }
            }
            else {
                return $q(function (resolve, reject) {
                    reject('authenticate with unknowns provider: ', provider);
                });
            }
        }
        else {
            return $q(function (resolve) {
                resolve(authData);
            });
        }
    };

    var getUserData = function (authData) {
        var userRef = new window.Firebase(firebaseConfig.url + '/users' + '/' + authData.uid);
        var user    = $firebaseObject(userRef);

        return user.$loaded();
    };

    var getDefaultGateway = function (userData) {
        var gateways = userData.gateways;

        if (!gateways) {
            return null;
        }

        var gateway = null;
        angular.forEach(gateways, function (value, gwId) {
            if (!gateway && value) {
                gateway = gwId;
            }

            if (value === 'default') {
                gateway = gwId;
            }
        });

        return gateway;
    };

    var getPendingRequestUserData = function (authData) {
        var userRef = new window.Firebase(firebaseConfig.url + '/pending-request' + '/' + authData.uid);
        var user    = $firebaseObject(userRef);

        return user.$loaded();
    };

    var checkUserPermission = function (userData) {
        var userGateway = getDefaultGateway(userData);

        return $q(function (resolve, reject) {
            if (!userGateway) {
                return reject('no gateway associate with this user.');
            }

            return resolve(userData);
        });
    };

    var addUserToPendingRequest = function (authData) {
        return getPendingRequestUserData(authData)
            .then(function (pendingRequestUser) {
                var userName            = authData.facebook ? authData.facebook.displayName : (authData.auth.name || authData.uid);
                pendingRequestUser.name = userName;
                return pendingRequestUser.$save();
            });
    };

    var setUserConfig = function (userData) {
        var userGateway   = getDefaultGateway(userData);
        var userInterface = userData.interface || 'user';

        return $q(function (resolve) {
            userConfig.set('gateway', userGateway);
            userConfig.set('interface', userInterface);
            return resolve(userData);
        });
    };

    var loginWith = function (provider) {
        $scope.authenticating = true;
        $scope.loggedIn = false;
        $scope.userHavePermission = false;
        var authData;
        authenticateWith(provider)
            .then(function (auth) {
                $scope.loggedIn = true;
                authData = auth;
                return getUserData(auth);
            })
            .then(function (userData) {
                return checkUserPermission(userData)
                    .then(function () {
                        return userData;
                    }, function (err) {
                        addUserToPendingRequest(authData);
                        return $q.reject(err);
                    }
                );
            })
            .then(function (userData) {
                return setUserConfig(userData);
            })
            .then(function () {
                $scope.userHavePermission = true;
                $state.go('mainMenu.scenesRecall');
            }, function (err) {
                $scope.userHavePermission = false;
                console.log('authenticate failed', err);
            })
            .then(function () {
                $scope.authenticating = false;
            });
    };

    $ionicPlatform.ready(function () {
        loginWith('auto');
    });

    $scope.login = function () {
        loginWith('facebook');
    };


    //var useTouchId = function () {
    //    $cordovaTouchID.authenticate('Unlock Smart Home').then(successHandler, errorHandler);
    //};
    //
    //var successHandler = function () {
    //    $state.go('mainMenu.deviceList');
    //};
    //
    //var errorHandler = function() {
    //    useTouchId();
    //};
    //
    //$ionicPlatform.ready(function () {
    //    $cordovaTouchID.checkSupport().then(function () {
    //        useTouchId();
    //    }, function(){
    //        $state.go('mainMenu.deviceList');
    //    });
    //});
});
