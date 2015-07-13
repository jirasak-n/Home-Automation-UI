'use strict';

window.app.factory('devicesAppData', function(firebaseRef, $firebaseObject, $firebaseArray, firebaseConfig){
        var ref = firebaseRef();
        var devicesAppDataRef = ref.child('app').child(firebaseConfig.appId).child('devices');

        var asArray = $firebaseArray(devicesAppDataRef);
        var asObject = $firebaseObject(devicesAppDataRef);

        return function(isObject){
            if(!isObject) {
                return asArray;
            }
            else {
                return asObject;
            }
        };
    });
