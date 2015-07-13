'use strict';

window.app.directive('sceneMainsPowerOutlet', function (icons, devices, devicesAppData, $ionicModal, $ionicPopup) {
    return {
        restrict   : 'AE',
        templateUrl: 'templates/directives/scene-mains-power-outlet.html',
        scope      : {
            'deviceId': '@deviceId',
            'deviceData': '=',
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

            //------------------- Setting ------------------

            var webPageView = angular.element('.view');

            // Create the color settings modal that we will use later
            var settingsModal;

            $ionicModal.fromTemplateUrl('templates/directives/scene-mains-power-outlet-modal.html', {
                scope: scope
            }).then(function (modal) {
                settingsModal = modal;

                scope.$on('$destroy', function () {
                    settingsModal.remove();
                });
            });

            scope.openSettingsModal = function () {
                settingsModal.show()
                    .then(function () {
                        webPageView.addClass('modal-ionic-scroll-bg');
                    });
            };

            scope.$on('modal.hidden', function () {
                webPageView.removeClass('modal-ionic-scroll-bg');
            });

            scope.closeSettingsModal = function () {
                settingsModal.hide();
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

                        scope.closeSettingsModal();
                    }
                });
            };

        }
    };
});
