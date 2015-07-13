'use strict';

window.app.directive('sceneDoorLock', function (devices, $ionicModal, $ionicPopup) {
    return {
        restrict   : 'AE',
        templateUrl: 'templates/directives/scene-door-lock.html',
        scope      : {
            'deviceId': '@deviceId',
            'deviceData': '=',
            'directiveEvent': '='
        },
        link       : function (scope) {
            var _devices = devices();

            scope.device = _devices.$getRecord(scope.deviceId);

            //------------------- Setting ------------------

            var webPageView = angular.element('.view');

            // Create the settings modal that we will use later
            var settingsModal;

            $ionicModal.fromTemplateUrl('templates/directives/scene-door-lock-modal.html', {
                scope: scope
            }).then(function (modal) {
                settingsModal = modal;

                scope.$on('$destroy', function () {
                    settingsModal.remove();
                });
            });

            scope.openSettingsModal = function () {
                settingsModal.show()
                    .then(function () {
                        webPageView.addClass('modal-ionic-scroll-bg');
                    });
            };

            scope.$on('modal.hidden', function () {
                webPageView.removeClass('modal-ionic-scroll-bg');
            });

            scope.closeSettingsModal = function () {
                settingsModal.hide();
            };

            scope.deleteDevice = function () {
                var confirmPopup = $ionicPopup.confirm({
                    title   : '<div style="color:#444">Confirm to delete</div>',
                    template: 'Do you want to delete this device?'
                });

                confirmPopup.then(function (res) {
                    if (res) {
                        if(typeof scope.directiveEvent.onDelete === 'function'){
                            scope.directiveEvent.onDelete();
                        }

                        scope.closeSettingsModal();
                    }
                });
            };
        }
    };
});
