'use strict';

window.app.controller('CreateSceneController', function ($scope, $stateParams, icons, scenes, devices, groupDevices, devicesAppData, scenesAppData, deviceTypes, $ionicModal, $q, $state, $ionicPopup, $ionicScrollDelegate) {
    var sceneId = $stateParams.sceneId;
    var _scenes = scenes();
    var _scenesAppData = scenesAppData(true);
    var sceneAppData = _scenesAppData[sceneId] || {uiOptions: {}};

    $scope.scene = _scenes.$getRecord(sceneId);
    $scope.icons = icons(true);
    $scope.iconsByGroup = icons('iconsByGroup');
    $scope.deviceTypes = deviceTypes(true);
    $scope.groupDevices = groupDevices();
    $scope.devicesAppData = devicesAppData(true);
    $scope.devices = devices(true);

    $scope.scrollTop = function () {
        $ionicScrollDelegate.scrollTop();
    };

    if ($scope.scene) {
        $scope.title = 'Edit Scene';
    } else {
        $scope.title = 'Create Scene';
    }

    $scope.temp = {
        name: $scope.scene && $scope.scene.name,
        description: $scope.scene && $scope.scene.description,
        iconId: sceneAppData.uiOptions.iconId,
        devices: ($scope.scene && angular.copy($scope.scene.devices)) || {},
        selectedDevices: {}
    };

    $scope.notAddedDevice = function (device) {
        if ($scope.temp.devices[device.$id]) {
            return false;
        }

        return true;
    };

    $scope.selectDevice = function (deviceId) {
        $scope.temp.selectedDevices[deviceId] = true;
    };

    $scope.deleteDevice = function (deviceId) {
        return function () {
            if ($scope.temp.devices[deviceId]) {
                delete $scope.temp.devices[deviceId];
            }
        };
    };

    $scope.disableSaveButton = false;

    $scope.saveScene = function () {
        if($scope.disableSaveButton){
            return;
        }

        $scope.disableSaveButton = true;

        if ($scope.scene) { // Edit
            _scenesAppData[sceneId] = {
                uiOptions: {
                    iconId: $scope.temp.iconId
                }
            };

            $scope.scene.name = $scope.temp.name;
            $scope.scene.description = $scope.temp.description;
            $scope.scene.devices = $scope.temp.devices;

            $q.all([_scenesAppData.$save(), _scenes.$save($scope.scene)])
                .then(function () {
                    $state.go('mainMenu.scenesSetting');
                }, function (err) {
                    $scope.disableSaveButton = false;
                });
        } else { // create
            $q(function (resolve, reject) {
                if (!$scope.temp.iconId) {
                    return reject("Please select scene's icon.");
                }
                if (!$scope.temp.name) {
                    return reject("Please insert scene's name.");
                }
                if (!$scope.temp.description) {
                    return reject("Please insert scene's description.");
                }

                return resolve();
            })
                .then(function () {
                    return _scenes.$add({
                        name: $scope.temp.name,
                        description: $scope.temp.description,
                        devices: $scope.temp.devices
                    });
                })
                .then(function (ref) {
                    var id = ref.key();

                    _scenesAppData[id] = {
                        uiOptions: {
                            iconId: $scope.temp.iconId
                        }
                    };

                    return _scenesAppData.$save();
                }).then(function () {
                    $state.go('mainMenu.scenesSetting');
                }, function (err) {
                    $scope.disableSaveButton = false;
                    $ionicPopup.alert({
                        title: 'Alert',
                        template: err
                    });
                });
        }
    };

    $scope.confirmDelete = false;

    $scope.deleteScene = function () {
        if (!$scope.scene) {
            return;
        }

        var confirmPopup = $ionicPopup.confirm({
            title: '<div>Confirm to delete</div>',
            template: 'Do you want to delete this scene?'
        });

        confirmPopup.then(function (res) {
            if (res) {
                $scope.confirmDelete = true;
                _scenes.$remove($scope.scene)
                    .then(function () {
                        delete _scenesAppData[sceneId];

                        return _scenesAppData.$save();
                    })
                    .then(function () {
                        $scope.confirmDelete = false;
                        $state.go('mainMenu.scenesSetting');
                    });
            }
        });


    };

    // Create the device picker modal that we will use later
    var webPageView = angular.element('.view');
    var devicePickerModal;

    $ionicModal.fromTemplateUrl('templates/device-picker-modal.html', {
        scope: $scope
    }).then(function (modal) {
        devicePickerModal = modal;

        $scope.$on('$destroy', function () {
            modal.remove();
        });
    });

    $scope.openDevicePickerModal = function () {
        devicePickerModal.show()
            .then(function () {
                webPageView.addClass('modal-ionic-scroll-bg');
            });
    };

    $scope.closeDevicePickerModal = function (saveDevice) {
        if (saveDevice) {
            angular.forEach($scope.temp.selectedDevices, function (value, key) {
                if ($scope.temp.devices[key]) {
                    return;
                }

                if (value) {
                    $scope.temp.devices[key] = {
                        delay: 0,
                        settings: angular.copy($scope.devices[key].settings),
                        status: angular.copy($scope.devices[key].status)
                    };
                }
            });
        }

        $scope.temp.selectedDevices = {};
        devicePickerModal.hide();
    };

    // Create the icon picker modal that we will use later
    var iconPickerModal;

    $ionicModal.fromTemplateUrl('templates/icon-picker-modal.html', {
        scope: $scope,
        focusFirstInput: true
    }).then(function (modal) {
        iconPickerModal = modal;

        $scope.$on('$destroy', function () {
            modal.remove();
        });
    });

    $scope.openIconPickerModal = function () {
        iconPickerModal.show()
            .then(function () {
                webPageView.addClass('modal-ionic-scroll-bg');
            });
    };

    $scope.closeIconPickerModal = function () {
        iconPickerModal.hide();
    };

    $scope.$on('modal.hidden', function () {
        webPageView.removeClass('modal-ionic-scroll-bg');
    });
});
