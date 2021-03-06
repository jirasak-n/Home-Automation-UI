'use strict';

window.app.directive('extendedColorLight', function (icons, devices, devicesAppData, $window, $timeout, $ionicModal) {
    return {
        restrict   : 'AE',
        templateUrl: 'templates/directives/extended-color-light.html',
        scope      : {
            'deviceId': '@deviceId'
        },
        link       : function (scope, element) {
            var _icons = icons(true);
            var _devicesAppData = devicesAppData(true);
            var _appData = _devicesAppData[scope.deviceId] || {};
            var _devices = devices();

            var optionsName = {};
            var options = {};

            scope.device = _devices.$getRecord(scope.deviceId);

            scope.save = function (device) {
                scope.device.status.brightness = scope.status.brightness;
                _devices.$save(device);
            };

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

                if (scope.device.status.isOn) {
                    scope.renderClass.push(optionsName.iconOn);
                    scope.renderClass.push(options.colorOn);
                } else {
                    scope.renderClass.push(optionsName.iconOff);
                    scope.renderClass.push(options.colorOff);
                }
            }

            scope.$watch('device.status.isOn', function () {
                updateUi();
            });

            //------------------- End on-off ---------------------

            //------------------- Dimmable ------------------------
            scope.levelChanging = false;
            scope.status = {
                brightness: scope.device.status.brightness
            };

            var rangeInput = $window.d3.select(element[0]).select('input[type="range"]');

            var updateRange = function () {
                rangeInput.transition()
                    .duration(1000)
                    .tween('value', function () {
                        var i = $window.d3.interpolate(this.value, scope.device.status.brightness);
                        return function (t) {
                            this.value = i(t);
                            scope.status.brightness = i(t);
                        };
                    });
            };

            scope.$watch('device.status.brightness', function () {
                if (scope.levelChanging) {
                    return;
                }

                updateRange();
            });

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

            //------------------- End Dimable --------------------

            //------------------- Color Setting ------------------

            var webPageView = angular.element('.view');

            // Create the color setting modal that we will use later
            var colorSettingModal;

            $ionicModal.fromTemplateUrl('templates/directives/extended-color-light-modal.html', {
                scope: scope
            }).then(function (modal) {
                colorSettingModal = modal;

                scope.$on('$destroy', function () {
                    colorSettingModal.remove();
                });
            });

            scope.openColorSettingModal = function () {
                colorSettingModal.show()
                    .then(function () {
                        webPageView.addClass('modal-ionic-scroll-bg');
                    });
            };

            scope.$on('modal.hidden', function () {
                webPageView.removeClass('modal-ionic-scroll-bg');
            });

            scope.closeColorSettingModal = function () {
                colorSettingModal.hide();
            };

        }
    };
});
