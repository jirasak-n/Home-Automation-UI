'use strict';

window.app.factory('deviceTypes', function () {
        var deviceType = {
            'MainsPowerOutlet'  : {
                type                        : 'MainsPowerOutlet',
                typeName                    : 'Power Control',
                pluralTypeName              : 'Power Controls',
                order                       : 2,
                uiOptions                   : {
                    iconOnId : 111,
                    iconOffId: 111
                },
                directiveName               : 'mains-power-outlet',
                managementDirectiveName     : 'management-mains-power-outlet',
                sceneControlSettingDirective: 'scene-mains-power-outlet'
            },
            'DoorLock'          : {
                type                        : 'DoorLock',
                typeName                    : 'Door Lock',
                pluralTypeName              : 'Door Locks',
                order                       : 1,
                uiOptions                   : {
                    iconOnId : 113,
                    iconOffId: 114
                },
                directiveName               : 'door-lock',
                managementDirectiveName     : 'management-door-lock',
                sceneControlSettingDirective: 'scene-door-lock'
            },
            'DimmableLight'     : {
                type                        : 'DimmableLight',
                typeName                    : 'Dimmable Light',
                pluralTypeName              : 'Dimmable Lights',
                order                       : 4,
                uiOptions                   : {
                    iconOnId : 111,
                    iconOffId: 111
                },
                directiveName               : 'dimmable-light',
                managementDirectiveName     : 'management-dimmable-light',
                sceneControlSettingDirective: 'scene-dimmable-light'
            },
            'ExtendedColorLight': {
                type                        : 'ExtendedColorLight',
                typeName                    : 'Color Light',
                pluralTypeName              : 'Color Lights',
                order                       : 3,
                uiOptions                   : {
                    iconOnId : 111,
                    iconOffId: 111
                },
                directiveName               : 'extended-color-light',
                managementDirectiveName     : 'management-extended-color-light',
                sceneControlSettingDirective: 'scene-extended-color-light'
            },
            'TemperatureSensor' : {
                type                        : 'TemperatureSensor',
                typeName                    : 'Temperature Sensor',
                pluralTypeName              : 'Temperature Sensors',
                order                       : 5,
                uiOptions                   : {
                    iconOnId : 112,
                    iconOffId: 112
                },
                directiveName               : 'temperature-sensor',
                managementDirectiveName     : 'management-temperature-sensor',
                sceneControlSettingDirective: 'scene-temperature-sensor'
            }
        };
        var deviceTypeArray = [];

        angular.forEach(deviceType, function(type, key){
            var tmp = angular.copy(type);
            tmp.$id = key;

            deviceTypeArray.push(tmp);
        });

        var compare = function(a, b){
            return a.order - b.order;
        };

        deviceTypeArray.sort(compare);

        return function(isObject){
            if(isObject){
                return deviceType;
            }else{
                return deviceTypeArray;
            }
        };
    });
