'use strict';

window.app.directive('managementDoorLock', function (devices) {
    return {
        restrict   : 'AE',
        templateUrl: 'templates/directives/management-door-lock.html',
        scope      : {
            'deviceId': '@deviceId'
        },
        link       : function (scope) {
            var _devices = devices();

            scope.device = _devices.$getRecord(scope.deviceId);

            scope.save = function (device) {
                _devices.$save(device);
            };
        }
    };
});
