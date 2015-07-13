'use strict';

window.app.controller('ProfileController', function ($scope, firebaseAuth) {

    angular.element('.bar.bar-base_color').css({'border': 0, 'border-bottom-color': '#27AAE3', 'border-bottom': 'none', 'background-image': 'none'});

    var user = firebaseAuth.$getAuth();
    var facebookProfile = user.facebook? user.facebook.cachedUserProfile : null;

    if(facebookProfile)
    {
        $scope.profilePictureUrl = facebookProfile.picture.data.url;
        $scope.firstName = facebookProfile.first_name;
        $scope.lastName = facebookProfile.last_name;

        $scope.gender = (facebookProfile.gender).charAt(0).toUpperCase() + (facebookProfile.gender).slice(1);

        if(facebookProfile.gender == 'male') {
            $scope.genderIcon = 'ion-male';

        } else if (facebookProfile.gender == 'female') {
            $scope.genderIcon = 'ion-female';
        }
    }

    $scope.logout = function() {
        console.log('test logout function');
    };

});
