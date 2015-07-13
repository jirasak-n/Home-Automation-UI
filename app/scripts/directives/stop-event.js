'use strict';

window.app.directive('stopEvent', function () {
    return {
        restrict: 'A',
        link    : function (scope, element) {
            element.bind('mousemove', function (e) {
                e.stopPropagation();
            });

            element.bind('touchmove', function (e) {
                e.stopPropagation();
            });
        }
    };
});
