'use strict';

window.app.directive('managementDimmableLight', function (icons, devices, devicesAppData) {
    return {
        restrict   : 'AE',
        templateUrl: 'templates/directives/management-dimmable-light.html',
        scope      : {
            'deviceId': '@deviceId'
        },
        link       : function (scope) {
            var _icons = icons(true);
            var _devicesAppData = devicesAppData(true);
            var _appData = _devicesAppData[scope.deviceId] || {};
            var _devices = devices();

            var optionsName = {};
            var options = {};

            scope.device = _devices.$getRecord(scope.deviceId);

            scope.save = function (device) {
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
        }
    };
});
