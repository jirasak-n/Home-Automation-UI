'use strict';

var app = angular.module('smartHome', ['ionic', 'ui.router.stateHelper', 'firebase', 'ngCordova']);

app.run(function ($ionicPlatform, $location, localStorage, $rootScope) {

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        // We can catch the error thrown when the $requireAuth promise is rejected
        // and redirect the user back to the home page
        if (error === 'AUTH_REQUIRED') {
            $location.url('/authentication');
        }
    });

    // save token to local storage
    var token = $location.hash();

    if(token){
        localStorage.set('token', token);
    }

    $location.url('/authentication');

    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleBlackTranslucent();
        }
    });
});

app.config(function (stateHelperProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.backButton.previousTitleText(false);

    //stateHelperProvider.setNestedState({
    //    cache      : false,
    //    name       : 'init',
    //    url        : '/',
    //    controller : 'InitController',
    //    templateUrl: 'templates/init.html'
    //});

    stateHelperProvider.setNestedState({
        cache      : false,
        name       : 'authentication',
        url        : '/authentication',
        controller : 'AuthenticationController',
        templateUrl: 'templates/authentication.html'
    });

    stateHelperProvider.setNestedState({
        name: 'mainMenu',
        abstract: true,
        url: '/main-menu',
        templateUrl: 'templates/main-menu.html',
        controller: 'MainMenuController',
        resolve: {
            'currentAuth': function(firebaseAuth) {
                return firebaseAuth.$requireAuth();
            },
            'allData': function(waitForData){
                return waitForData();
            }
        },
        children: [
            {
                name: 'profile',
                url: '/profile',
                views: {
                    menuContent: {
                        controller: 'ProfileController',
                        templateUrl: 'templates/profile.html'
                    }
                }
            },
            {
                name: 'scenesRecall',
                url: '/scenes-recall',
                views: {
                    menuContent: {
                        controller: 'ScenesRecallController',
                        templateUrl: 'templates/scenes-recall.html'
                    }
                }
            },
            {
                name : 'deviceList',
                url  : '/device-list',
                views: {
                    menuContent: {
                        controller: 'DeviceListController',
                        templateUrl: 'templates/device-list.html'
                    }
                }
            },
            {
                cache: false,
                name: 'manageDevices',
                url: '/manage-devices',
                views: {
                    menuContent: {
                        controller: 'ManageDevicesController',
                        templateUrl: 'templates/manage-devices.html'
                    }
                },
                children: [
                    {
                        cache: false,
                        name: 'manageDeviceDetail',
                        url: '/manage-device-detail/:deviceId',
                        views: {
                            'menuContent@mainMenu': {
                                controller: 'ManageDeviceDetailController',
                                templateUrl: 'templates/manage-device-detail.html'
                            }
                        }
                    }
                ]
            },
            {
                cache: false,
                name: 'scenesSetting',
                url: '/scenes-setting',
                views: {
                    menuContent: {
                        controller: 'ScenesSettingController',
                        templateUrl: 'templates/scenes-setting.html'
                    }
                },
                children: [
                    {
                        cache: false,
                        name: 'createScene',
                        url: '/create-scene',
                        views: {
                            'menuContent@mainMenu': {
                                controller: 'CreateSceneController',
                                templateUrl: 'templates/create-scene.html'
                            }
                        }
                    },
                    {
                        cache: false,
                        name: 'editScene',
                        url: '/edit-scene/:sceneId',
                        views: {
                            'menuContent@mainMenu': {
                                controller: 'CreateSceneController',
                                templateUrl: 'templates/create-scene.html'
                            }
                        }
                    }
                ]
            }
        ]
    });
    
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/authentication');
});
