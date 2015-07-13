'use strict';

window.app.directive('sceneExtendedColorLight', function (icons, devices, devicesAppData, $window, $timeout, $ionicModal, $ionicPopup) {
    return {
        restrict   : 'AE',
        templateUrl: 'templates/directives/scene-extended-color-light.html',
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
            //scope.status = {
            //    brightness: scope.deviceData.status.brightness
            //};

            //var rangeInput = $window.d3.select(element[0]).select('input[type="range"]');
            //
            //var updateRange = function () {
            //    rangeInput.transition()
            //        .duration(1000)
            //        .tween('value', function () {
            //            var i = $window.d3.interpolate(this.value, scope.deviceData.status.brightness);
            //            return function (t) {
            //                this.value = i(t);
            //                scope.status.brightness = i(t);
            //            };
            //        });
            //};

            //scope.$watch('deviceData.status.brightness', function () {
            //    if (scope.levelChanging) {
            //        return;
            //    }
            //
            //    updateRange();
            //});

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

            //------------------- Color Setting ------------------
            scope.select = {};
            var colorTemp = {
                hue             : scope.deviceData.status.hue,
                saturation      : scope.deviceData.status.saturation,
                colorTemperature: scope.deviceData.status.colorTemperature
            };

            if (scope.deviceData.status.colorTemperature) {
                scope.select.colorMode = 'COLOR_TEMP';

                delete scope.deviceData.status.hue;
                delete scope.deviceData.status.saturation;
            } else {
                scope.select.colorMode = 'HUE_SAT';

                delete scope.deviceData.status.colorTemperature;
            }

            delete scope.deviceData.status.x;
            delete scope.deviceData.status.y;

            scope.$watch('select.colorMode', function (value, oldValue) {
                if (value === oldValue) {
                    return;
                }

                if (scope.select.colorMode === 'COLOR_TEMP') {
                    colorTemp.hue = scope.deviceData.status.hue;
                    colorTemp.saturation = scope.deviceData.status.saturation;

                    scope.deviceData.status.colorTemperature = colorTemp.colorTemperature;

                    delete scope.deviceData.status.hue;
                    delete scope.deviceData.status.saturation;
                } else {
                    colorTemp.colorTemperature = scope.deviceData.status.colorTemperature;

                    scope.deviceData.status.hue = colorTemp.hue;
                    scope.deviceData.status.saturation = colorTemp.saturation;

                    delete scope.deviceData.status.colorTemperature;
                }
            });

            var webPageView = angular.element('.view');

            // Create the color setting modal that we will use later
            var settingModal;

            $ionicModal.fromTemplateUrl('templates/directives/scene-extended-color-light-modal.html', {
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
                console.log('device', scope.deviceData);
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
