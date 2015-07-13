'use strict';

window.app.directive('sceneDimmableLight', function (icons, devices, devicesAppData, $window, $timeout, $ionicModal, $ionicPopup) {
    return {
        restrict   : 'AE',
        templateUrl: 'templates/directives/scene-dimmable-light.html',
        scope      : {
            'deviceId'      : '@deviceId',
            'deviceData'    : '=',
            'directiveEvent': '='
        },
        link       : function (scope) {
            var _icons = icons(true);
            var _devicesAppData = devicesAppData(true);
            var _appData = _devicesAppData[scope.deviceId] || {};
            var _devices = devices();

            var optionsName = {};
            var options = {};

            scope.device = _devices.$getRecord(scope.deviceId);

            options = {
                iconOnId : (_appData.uiOptions && _appData.uiOptions.iconOnId),
                iconOffId: (_appData.uiOptions && _appData.uiOptions.iconOffId),
                colorOn  : 'positive',
                colorOff : 'dark'
            };

            optionsName = {
                iconOn : _icons[options.iconOnId] ? _icons[options.iconOnId].icon : 'ion-power',
                iconOff: _icons[options.iconOffId] ? _icons[options.iconOffId].icon : 'ion-power'
            };

            scope.renderClass = [];

            function updateUi() {
                scope.renderClass = [];

                if (scope.deviceData.status.isOn) {
                    scope.renderClass.push(optionsName.iconOn);
                    scope.renderClass.push(options.colorOn);
                } else {
                    scope.renderClass.push(optionsName.iconOff);
                    scope.renderClass.push(options.colorOff);
                }
            }

            scope.$watch('deviceData.status.isOn', function () {
                updateUi();
            });

            //------------------- End on-off ---------------------

            //------------------- Dimmable ------------------------
            scope.levelChanging = false;

            var timeoutPromise;
            scope.brightnessChange = function () {
                if (!scope.levelChanging) {
                    scope.levelChanging = true;
                    timeoutPromise = $timeout(function () {
                        scope.levelChanging = false;
                    }, 1000);
                } else {
                    $timeout.cancel(timeoutPromise);
                    timeoutPromise = $timeout(function () {
                        scope.levelChanging = false;
                    }, 1000);
                }
            };

            //------------------- Modal Setting ------------------
            var webPageView = angular.element('.view');

            // Create the color setting modal that we will use later
            var settingModal;

            $ionicModal.fromTemplateUrl('templates/directives/scene-dimmable-light-modal.html', {
                scope: scope
            }).then(function (modal) {
                settingModal = modal;

                scope.$on('$destroy', function () {
                    settingModal.remove();
                });
            });

            scope.openSettingModal = function () {
                settingModal.show()
                    .then(function () {
                        webPageView.addClass('modal-ionic-scroll-bg');
                    });
            };

            scope.$on('modal.hidden', function () {
                webPageView.removeClass('modal-ionic-scroll-bg');
            });

            scope.closeSettingModal = function () {
                settingModal.hide();
            };

            scope.deleteDevice = function () {
                var confirmPopup = $ionicPopup.confirm({
                    title   : '<div style="color:#444">Confirm to delete</div>',
                    template: 'Do you want to delete this device?'
                });

                confirmPopup.then(function (res) {
                    if (res) {
                        if(typeof scope.directiveEvent.onDelete === 'function'){
                            scope.directiveEvent.onDelete();
                        }

                        scope.closeSettingModal();
                    }
                });
            };

        }
    };
});
