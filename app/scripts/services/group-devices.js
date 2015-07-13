'use strict';

window.app.factory('groupDevices', function(devices, deviceTypes, devicesAppData, $q){
        var _deviceTypes = deviceTypes();
        var _devicesAppData = devicesAppData(true);
        var _devices = devices();

        var groupDevice = {
            data: {}
        };

        var compare = function (a, b) {
            var aOrder = 0;
            var bOrder = 0;

            try {
                aOrder = _devicesAppData[a.$id].uiOptions.order;
                bOrder = _devicesAppData[b.$id].uiOptions.order;
            }
            catch (e) {
                return 1;
            }

            return aOrder - bOrder;
        };

        var packData = function () {
            groupDevice.data = [];
            _devices.sort(compare);

            angular.forEach(_deviceTypes, function (type) {
                var tmpType = angular.copy(type);
                tmpType.devices = [];

                angular.forEach(_devices, function (device) {
                    if (device.deviceType === type.$id) {
                        tmpType.devices.push(device);
                    }
                });

                groupDevice.data.push(tmpType);
            });
        };

        var promises = [_devicesAppData.$loaded(), _devices.$loaded()];

        $q.all(promises)
            .then(function () {
                _devicesAppData.$watch(function () {
                    packData();
                });

                _devices.$watch(function (event) {
                    if(event.event === 'child_changed'){
                        return;
                    }
                    packData();
                });

                packData();
            });

        return function () {
            return groupDevice;
        };
    });
