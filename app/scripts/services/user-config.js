'use strict';

window.app.factory('userConfig',function () {
    var config = {};
    return {
        set      : function (key, value) {
            config[key] = value;
        },
        get      : function (key, defaultValue) {
            return config[key] || defaultValue;
        }
    };
});