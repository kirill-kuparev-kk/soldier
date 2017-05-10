SolderGuide
  .controller('MainCtrl', ['$rootScope', '$scope', '$timeout', '$ionicPopover', '$ionicModal', '$ionicPopup',  MainCtrl]);


function MainCtrl($rootScope, $scope, $timeout, $ionicPopover, $ionicModal, $ionicPopup) {
  $rootScope.modal = undefined;

  $rootScope.inputPatterns = {
    email: "^([\\w-]{3,}(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$",
    password: ".{6,20}",
    onlyNumber: "^\\d{5,11}"
  };


  $rootScope.trackEvent = function (event) {
    var eventName = ListEvents[event];
    if (!eventName) return undefined;
    if (!!$rootScope.GAnalyticsOn) GoogleAnalytics.trackEvent(eventName);
    return undefined;
  };


  /**********************
   *  Popover methods
   **********************/
  $rootScope.openPopover = function (templateName, duration) {
    if (!templateName) return undefined;

    $rootScope.closePopover();
    $ionicPopover
      .fromTemplateUrl("pages/templates/popover-" + templateName + ".html", {
        scope: $scope,
        cssClass: ''
      }).then(function (popover) {
        $rootScope.popover = popover;
        popover.show();
        $timeout(function () {
          popover.remove();
        }, duration || 3000);
      });
    return undefined;
  };


  $rootScope.closePopover = function () {
    if ($rootScope.popover) {
      $rootScope.popover.remove();
      $rootScope.popover = null;
    }
    return undefined;
  };
  /**********************
   * End Popover methods
   **********************/


  /**********************
   * Modal methods
   **********************/
  $rootScope.openModal = function (templateName, scope, backdropClickToClose) {
    var backdropClick = backdropClickToClose === 'true';
    if (!templateName) return undefined;
    $rootScope.closeModal(null, function(){
      $ionicModal
        .fromTemplateUrl("pages/templates/modal-" + templateName + ".html", {
          scope: scope || $scope,
          animation: 'fade-in-modal',
          backdropClickToClose: backdropClickToClose ? backdropClick : true
        })
        .then(function (modal) {
          modal.show();
          $rootScope.modal = modal;
        })
        .catch(function () {
          error('openModal', arguments)
        });
    });
  };


  $rootScope.closeModal = function (e, cb) {
    var isCallback = typeof(cb) === 'function';

    if (e) {
      e.stopImmediatePropagation();
      e.stopPropagation();
      e.preventDefault();
    }
    if ($rootScope.modal) {
      $rootScope.modal.remove()
      .finally(function(){
        $rootScope.modal = null;
        if (isCallback) return cb();
        else return undefined;
      });
    }
    else {
      if (isCallback) return cb();
      else return undefined;
    }
  };



  var number_tries_openModalWithTimeout = 0;
  $rootScope.openModalWithTimeout = function (templateName, scope, backdropClickToClose, delay_MS, cb) {
    var isCallback = typeof(cb) === 'function';

    var backdropClick = backdropClickToClose === 'true';
    if (!templateName) return undefined;
    $timeout(function(){
      $ionicModal
        .fromTemplateUrl("pages/templates/modal-" + templateName + ".html", {
          scope: scope || $scope,
          animation: 'fade-in-modal',
          backdropClickToClose: backdropClickToClose ? backdropClick : true
        })
        .then(function (modal) {
          console.log('here ??? ', modal);
          modal.show();

          number_tries_openModalWithTimeout = 0;

          if (delay_MS) {
            $timeout(function () {
              modal.hide();
              modal.remove();
              if (isCallback) return cb(null, modal);
              else return undefined;
            }, delay_MS)
          }
          else {
            if (isCallback) return cb(null, modal);
            else return undefined;
          }
        })
        .catch(function (err) {

          error('MainCtrl :: openModalWithTimeout.', err);
          if (number_tries_openModalWithTimeout < 3) {
            number_tries_openModalWithTimeout++;
            return $rootScope.openModalWithTimeout(templateName, scope, backdropClickToClose, delay_MS, cb);
          }
          else {
            if (isCallback) return cb(null, modal);
            else return undefined;
          }
        });
    }, 100);
  };

  /**********************
   * End Modal methods
   **********************/


  /**********************
   * Popup methods
   **********************/
  $rootScope.closePopup = function () {
    if ($rootScope.popup) {
      $rootScope.popup.close();
      $rootScope.popup = undefined;
    }
    return undefined;
  };


  $rootScope.popupAlert = function (title, content, buttonTitle, callback) {
    var isCallback = typeof(callback) === 'function';
    $rootScope.loadingOff();
    $rootScope.closePopup();
    $ionicPopup.confirm({
      title: title || 'Alert',
      cssClass: '',
      template: content,
      buttons: [{
        text: buttonTitle || 'OK',
        type: '',
        onTap: isCallback ? callback : function () {
        }
      }]
    });
  };


  $rootScope.popupConfirm = function (title, content, buttonTitle, callback) {
    var isCallback = typeof(callback) === 'function';
    $rootScope.loadingOff();
    $rootScope.closePopup();
    $ionicPopup.confirm({
      title: title || 'Confirm',
      cssClass: '',
      template: content,
      buttons: [
        {
          text: 'Cancel',
          type: '',
          onTap: $rootScope.closePopup
        },
        {
          text: buttonTitle || 'OK',
          type: '',
          onTap: isCallback ? callback : function () {
          }
        }
      ]
    });
  };
  /**********************
   * End Popup methods
   **********************/


  /**********************
   * Alerts
   **********************/
  $rootScope.alert = function (title, content, buttonTitle, callback) {
    $rootScope.loadingOff();
    var isCallback = typeof(callback) === 'function';
    if (navigator && navigator.notification && navigator.notification.alert) {
      navigator.notification.alert(
        content,
        isCallback ? callback : function () {},
        title,
        buttonTitle || 'Okay'
      );
    }
    else {
      $rootScope.popupAlert(title, content, buttonTitle, callback);
    }
    return undefined;
  };


  $rootScope.confirm = function (title, content, buttonTitle, callback) {
    $rootScope.loadingOff();
    var isCallback = typeof(callback) === 'function';
    if (!isCallback) return undefined;
    if (navigator && navigator.notification && navigator.notification.confirm) {
      navigator.notification.confirm(
        content,
        function (buttonIndex) {
          if (buttonIndex === 2) return callback();
          else return undefined;
        },
        title,
        ['Cancel', buttonTitle || 'Okay']
      );
    }
    else {
      $rootScope.popupConfirm(title, content, buttonTitle, callback);
    }
    return undefined;
  };


  $rootScope.alertWorkOn = function () {
    return $rootScope.alert(
      'Sorry :-(',
      'It will be added soon.',
      'Okay'
    );
  };
  /**********************
   * End Alerts
   **********************/



  $rootScope.replaceSpecSymbols = replaceSpecSymbols;
  function replaceSpecSymbols(string) {
    if (!string) return string;
    return string.replace(/[\.\s\/\\\-]/gmi, '_');
  }


  $rootScope.isEmptyObject = function (obj) {
    return obj && typeof(obj) === 'object' ? !Object.keys(obj).length : true;
  };


  $rootScope.JSONstringify = function (obj) {
    return obj ? JSON.stringify(obj) : '';
  };


  $rootScope.shuffleArray = function (o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };


  $rootScope.capitalizeFirstLetter = function (string) {
    if (!string) return '';
    else return string.charAt(0).toUpperCase() + string.slice(1);
  };
}