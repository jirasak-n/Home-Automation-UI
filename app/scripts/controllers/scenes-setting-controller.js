'use strict';

window.app.controller('ScenesRecallController', function ($scope, icons, scenes, scenesAppData) {
    $scope.scenesAppData = scenesAppData(true);
    $scope.scenes = scenes();
    $scope.icons = icons(true);
});
