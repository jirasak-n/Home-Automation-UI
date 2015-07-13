'use strict';

window.app.factory('gateway', function (firebaseRef, $firebaseObject) {
    var ref = firebaseRef();
    var gatewayRef = ref.child('gateway');

    var devicesObject = $firebaseObject(gatewayRef);

    return function () {
        return devicesObject;

    };
});
