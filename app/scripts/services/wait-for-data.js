'use strict';

window.app.factory('waitForData',function ($state, devices, devicesAppData, scenes, scenesAppData, $q) {
    var _devices = devices(true);
    var _devicesAppData = devicesAppData(true);
    var _scenes = scenes(true);
    var _scenesAppData = scenesAppData(true);

    var allData = $q.all([_devices.$loaded(), _devicesAppData.$loaded(), _scenes.$loaded(), _scenesAppData.$loaded()]);

    return function(){
        return allData;
    };
});