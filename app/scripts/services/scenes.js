'use strict';

window.app.factory('scenes', function(firebaseRef, $firebaseObject, $firebaseArray){
        var ref = firebaseRef();
        var scenesRef = ref.child('scenes');

        var devicesArray = $firebaseArray(scenesRef);
        var devicesObject = $firebaseObject(scenesRef);

        return function(isObject){
            if(!isObject) {
                return devicesArray;
            }
            else {
                return devicesObject;
            }
        };
    });
