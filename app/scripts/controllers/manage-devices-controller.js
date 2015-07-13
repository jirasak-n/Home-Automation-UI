'use strict';

window.app.controller('ManageDevicesController', function ($scope, icons, scenes, scenesAppData, devices, devicesAppData, deviceTypes, gateway, groupDevices, $ionicPopup) {
    $scope.deviceTypes = deviceTypes(true);
    $scope.devices = devices();
    $scope.gateway = gateway();
    $scope.devicesAppData = devicesAppData(true);
    $scope.groupDevices = groupDevices();
    $scope.icons = icons(true);
    $scope.iconArray = icons(false);

    // A confirm Scan dialog
    $scope.scanConfirm = function () {

        var confirmPopup = $ionicPopup.confirm({
            title   : '<div style="color:#444">Confirm to scan</div>',
            template: '<div>Do you want to scan new devices?</div><div style="color:#a0a0a0">If you click ok, beginning to scan in 60s</div>'
        });

        confirmPopup.then(function (res) {
            if (res) {
                $scope.gateway.permitJoining = true;
                $scope.gateway.$save();
            }
        });
    };

    $scope.isSupportedDevice = function (device) {
        if ($scope.deviceTypes[device.deviceType]) {
            return true;
        } else {
            return false;
        }
    };
});
