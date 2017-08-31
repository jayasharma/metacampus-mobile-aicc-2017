angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      var ref;
      if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
          window.open = cordova.InAppBrowser.open;
          ref = window.open('http://70aicc2017.iisuniv.ac.in/user/login', "_self", "location=no");
         }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }

        ref.addEventListener('exit', function(event) {
            //ionic.Platform.exitApp();
            navigator.app.exitApp();
        });

    });
});
