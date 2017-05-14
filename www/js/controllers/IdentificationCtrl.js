SolderGuideControllers.controller('IdentificationCtrl', ['$rootScope', '$scope', '$timeout', '$ionicScrollDelegate', 'UserService','$state','$ionicSideMenuDelegate', IdentificationCtrl]);


function IdentificationCtrl($rootScope, $scope, $timeout, $ionicScrollDelegate, UserService, $state,$ionicSideMenuDelegate) {

    $rootScope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };

}
