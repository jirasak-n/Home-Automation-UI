'use strict';

window.app.controller('ManageDeviceDetailController', function ($scope, devices, devicesAppData, $stateParams, icons, $ionicModal, $q, $state, $ionicPopup, $ionicScrollDelegate) {
    var deviceId = $stateParams.deviceId;
    var _devices = devices();
    var _devicesAppData = devicesAppData(true);
    var appData = _devicesAppData[deviceId] || {uiOptions:{}};

    $scope.device = _devices.$getRecord(deviceId);
    $scope.icons = icons(true);
    $scope.iconsByGroup = icons('iconsByGroup');

    $scope.scrollTop = function() {
        $ionicScrollDelegate.scrollTop();
    };

    if($scope.device.isNew){
        $scope.title = deviceId;
    }else{
        $scope.title = $scope.device.name;
    }

    $scope.temp = {
        name       :  $scope.device.name,
        description: $scope.device.description,
        iconId   : appData.uiOptions.iconOnId
    };

    $scope.disableSaveButton = false;

    $scope.save = function () {
        if($scope.disableSaveButton){
            return;
        }

        $scope.disableSaveButton = true;

        $scope.device.name = $scope.temp.name;
        $scope.device.description = $scope.temp.description;
        $scope.device.isNew = false;

        _devicesAppData[deviceId] = {
            uiOptions: {
                iconOnId : $scope.temp.iconId || null,
                iconOffId: $scope.temp.iconId || null,
                order: appData.uiOptions && appData.uiOptions.order
            }
        };

        $q.all([_devices.$save($scope.device), _devicesAppData.$save()])
            .then(function () {
                $state.go('mainMenu.manageDevices');
            });
    };

    $scope.confirmDelete = false;

    // A confirm dialog
    $scope.deleteConfirm = function (device) {

        var confirmPopup = $ionicPopup.confirm({
            title   : '<div>Confirm to delete</div>',
            template: 'All devices with the same<br><span style="color:#EF4E3A">IEEE Address: ' + device.$id + ' will delete.</span><br>Do you want to delete?'
        });

        confirmPopup.then(function (res) {
            if (res) {
                $scope.confirmDelete = true;
                _devices.$remove(device)
                    .then(function () {
                        $scope.confirmDelete = false;
                        $state.go('mainMenu.manageDevices');
                    });
            }
        });
    };

    // Create the icon picker modal that we will use later
    var webPageView = angular.element('.view');
    var iconPickerModal;

    $ionicModal.fromTemplateUrl('templates/icon-picker-modal.html', {
        scope: $scope,
        focusFirstInput: true
    }).then(function (modal) {
        iconPickerModal = modal;

        $scope.$on('$destroy', function () {
            modal.remove();
        });
    });

    $scope.openIconPickerModal = function () {
        webPageView.addClass('modal-ionic-scroll-bg');
        iconPickerModal.show();
    };

    $scope.closeIconPickerModal = function () {
        iconPickerModal.hide();
    };

    $scope.$on('modal.hidden', function () {
        webPageView.removeClass('modal-ionic-scroll-bg');
    });
});
