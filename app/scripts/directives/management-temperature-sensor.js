'use strict';

window.app.directive('managementTemperatureSensor', function (icons, devices, devicesAppData) {
    return {
        restrict   : 'AE',
        templateUrl: 'templates/directives/management-temperature-sensor.html',
        scope      : {
            'deviceId': '@deviceId'
        },
        link       : function (scope) {
            var _icons = icons(true);
            var _devicesAppData = devicesAppData(true);
            var _appData = _devicesAppData[scope.deviceId] || {};
            var _devices = devices();

            scope.device = _devices.$getRecord(scope.deviceId);

            var options = {
                iconOnId : (_appData.uiOptions && _appData.uiOptions.iconOnId)
            };

            scope.icon = _icons[options.iconOnId] ? _icons[options.iconOnId].icon : 'ion-thermometer';
        }
    };
});
