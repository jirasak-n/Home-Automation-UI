'use strict';

window.app.factory('scenesAppData', function(firebaseRef, $firebaseObject, $firebaseArray, firebaseConfig){
        var ref = firebaseRef();
        var scenesAppDataRef = ref.child('app').child(firebaseConfig.appId).child('scenes');

        var asArray = $firebaseArray(scenesAppDataRef);
        var asObject = $firebaseObject(scenesAppDataRef);

        return function(isObject){
            if(!isObject) {
                return asArray;
            }
            else {
                return asObject;
            }
        };
    });
