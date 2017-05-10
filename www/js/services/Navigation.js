ProFiberAppServices.service('Navigation', function ($rootScope, $state) {
  //directly binding events to this context
  this.goNative = function (to, params, options, direction) {
    $state.transitionTo(to, params, angular.extend({inherit: true, relative: $state.$current}, options));
    if (!$rootScope.nativeAnimationOn) return undefined;
    if (!window.plugins || !window.plugins.nativepagetransitions) return error('Navigation service. nativepagetransitions plugin is not defined');
    window.plugins.nativepagetransitions.slide({
        direction: direction || 'left',
        duration: 1000
      },
      function () {
      },
      function () {
      }
    );
    return undefined;
  };
});
