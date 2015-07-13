'use strict';

window.app.factory('firebaseAuth', function (firebaseConfig, $window, $firebaseAuth) {
    var ref = new $window.Firebase(firebaseConfig.url);

    return $firebaseAuth(ref);
});
