var SolderGuide = angular.module('ProFiberApp', [
  'ionic',
  'ngCordova',
  'ngResource',
  'ngIOS9UIWebViewPatch',
  'ui.router',
  'angular-svg-round-progress',
  'profiber.controllers',
  'profiber.services',
  'profiber.factories',
  'profiber.filters',
  'profiber.directives',
  'rzModule'
]);


var ProFiberAppControllers = angular.module('profiber.controllers', []);
var ProFiberAppDirectives  = angular.module('profiber.directives', []);
var ProFiberAppFilters     = angular.module('profiber.filters', []);
var ProFiberAppServices    = angular.module('profiber.services', []);
var ProFiberAppFactories   = angular.module('profiber.factories', []);
var ProFiberAppResources   = ProFiberAppFactories; // this is factories too


var ENV = 'development';
//var ENV = 'production';

SolderGuide.constant('$ionicLoadingConfig', {
  noBackdrop: true,
  animation: 'fade-in',
  template: '<div></div>'
});


SolderGuide
  .run(['$rootScope', '$ionicPlatform', '$state', '$timeout', '$ionicPopup', '$ionicLoading', '$ionicHistory', '$cordovaSplashscreen','Navigation', runMethod]);


function runMethod($rootScope, $ionicPlatform, $state, $timeout, $ionicPopup, $ionicLoading, $ionicHistory, $cordovaSplashscreen, Navigation) {
  $rootScope.ENV = ENV;
  $rootScope.splashscreenOn    = ENV == 'production';
  ionic.$ionicPopup = $ionicPopup;
  $rootScope.$state = $state;
  $rootScope.$backState = undefined;
  $rootScope.appVersion = '';
  $rootScope.appBuild   = '';
  $rootScope.loadingApp = undefined;
  $rootScope.popup      = undefined;
  $rootScope.deviceOSVersion   = undefined;
  $rootScope.completedProtocol = {};
  $rootScope.isAndroid  = $ionicPlatform.is('android');
  $rootScope.isIOS      = $ionicPlatform.is('ios');
  $rootScope.platform   = $rootScope.isAndroid ? 'android' : $rootScope.isIOS ? 'ios' : '';
  $rootScope.$ionicHistory = $ionicHistory;


  /**********************
   * Ready
   **********************/
  $ionicPlatform.ready(function () {
    if ($rootScope.splashscreenOn && $cordovaSplashscreen && $cordovaSplashscreen.hide) {
      $timeout(function () {
        $cordovaSplashscreen.hide();
      }, 1000);
    }
  });
  /**********************
   * End Ready
   **********************/



  // redefinition on default $state.go
  $state.go = function go(to, params, options, direction) {
    return Navigation.goNative(to, params, options, direction)
  };
}
/*
 * Helpers
 * */

var log   = console.log.bind(console);
var error = console.error.bind(console);
var warn  = console.warn.bind(console);


/*
 * End Helpers
 * */
