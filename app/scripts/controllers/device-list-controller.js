'use strict';

window.app.controller('DeviceListController', function ($scope, groupDevices) {
    $scope.groupDevice = groupDevices();
});
