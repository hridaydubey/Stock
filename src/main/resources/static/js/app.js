// Default colors
var brandPrimary =  '#20a8d8';
var brandSuccess =  '#4dbd74';
var brandInfo =     '#63c2de';
var brandWarning =  '#f8cb00';
var brandDanger =   '#f86c6b';

var grayDark =      '#2a2c36';
var gray =          '#55595c';
var grayLight =     '#818a91';
var grayLighter =   '#d1d4d7';
var grayLightest =  '#f8f9fa';

angular
.module('app', [
  'ui.router',
  'ui.router.state.events',
  'oc.lazyLoad',
  'ncy-angular-breadcrumb',
  'angular-loading-bar'
])
.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false;
  cfpLoadingBarProvider.latencyThreshold = 1;
}])
 .run(function (AuthService, $rootScope, $state) {
        // For implementing the authentication with ui-router we need to listen the
        // state change. For every state change the ui-router module will broadcast
        // the '$stateChangeStart'.
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            // checking the user is logged in or not
            if (!AuthService.user) {
                // To avoiding the infinite looping of state change we have to add a
                // if condition.
                if (toState.name != 'login' && toState.name != 'register') {
                    event.preventDefault();
                    $state.go('login');
                }
            } else {
                // checking the user is authorized to view the states
                if (toState.data && toState.data.role) {
                    var hasAccess = false;
                    for (var i = 0; i < AuthService.user.roles.length; i++) {
                        var role = AuthService.user.roles[i];
                        if (toState.data.role == role) {
                            hasAccess = true;
                            break;
                        }
                    }
                    if (!hasAccess) {
                        event.preventDefault();
                        $state.go('access-denied');
                    }

                }
            }
        });
    });