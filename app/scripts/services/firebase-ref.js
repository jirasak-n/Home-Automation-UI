'use strict';

window.app.factory('firebaseRef', function (firebaseConfig, $window, userConfig) {
    var ref = new $window.Firebase(firebaseConfig.url + '/' + userConfig.get('gateway'));
    return function () {
        return ref;
    };
});
