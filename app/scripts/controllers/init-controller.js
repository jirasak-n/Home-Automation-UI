'use strict';

window.app.controller('InitController', function ($scope, $state, devices, devicesAppData, scenes, scenesAppData, $q) {
    var _devices = devices(true);
    var _devicesAppData = devicesAppData(true);
    var _scenes = scenes(true);
    var _scenesAppData = scenesAppData(true);

    $q.all([_devices.$loaded(), _devicesAppData.$loaded(), _scenes.$loaded(), _scenesAppData.$loaded()])
        .then(function(){
            $state.go('mainMenu.scenesRecall');
        });
});
