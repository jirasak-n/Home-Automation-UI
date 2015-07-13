'use strict';

window.app.controller('MainMenuController', function ($scope, deviceTypes, devices, userConfig, firebaseAuth) {
    var _deviceTypes = deviceTypes(true);
    var _devices = devices();
    $scope.interface = userConfig.get('interface');

    $scope.newDevicesCount = 0;

    //var user = firebaseAuth.$getAuth();
    //var facebookProfile = user.facebook? user.facebook.cachedUserProfile : null;

    //if(facebookProfile)
    //{
    //    $scope.profilePictureUrl = facebookProfile.picture.data.url;
    //}

    var countNewDevice = function(){
        $scope.newDevicesCount = 0;

        angular.forEach(_devices, function(device){
            if(_deviceTypes[device.deviceType] && device.isNew){
                $scope.newDevicesCount++;
            }
        });
    };

    var unwatch = _devices.$watch(function () {
        countNewDevice();
    });

    countNewDevice();

    $scope.$on('$destroy', function(){
        $scope.devices.$destroy();
        unwatch();
    });
});