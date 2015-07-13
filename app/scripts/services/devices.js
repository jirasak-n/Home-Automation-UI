'use strict';

window.app.factory('devices', function (firebaseRef, $firebaseObject, $firebaseArray) {
    var ref = firebaseRef();
    var deviceRef = ref.child('devices');

    var devicesArray = $firebaseArray(deviceRef);
    var devicesObject = $firebaseObject(deviceRef);

    return function (isObject) {
        if (!isObject) {
            return devicesArray;
        }
        else {
            return devicesObject;
        }
    };
});
