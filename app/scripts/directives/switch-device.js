'use strict';

window.app.directive('switchDevice', function ($compile) {
        return {
            restrict: 'AE',
            scope   : {
                'deviceId'      : '@deviceId',
                'deviceData'    : '=deviceData',
                'directiveName' : '@directiveName',
                'directiveEvent': '=directiveEvent'
            },
            link    : function (scope, element) {
                var unregister = scope.$watch('directiveName', function () {
                    var template = '<div ' + scope.directiveName + ' device-data="deviceData" device-id="{{::deviceId}}" directive-event="directiveEvent"></div>';
                    var el = $compile(template)(scope);
                    element.html(el);
                    unregister();
                });
            }
        };
    });
