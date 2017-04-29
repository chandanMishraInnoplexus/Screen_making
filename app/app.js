const requires = [
    'ui.router',
    'ngCookies',
    'ngSanitize',
    'ngStorage',
    'restangular',
    'ui.bootstrap',
    'ngAnimate',
    'ngMessages'
];

window.app = angular.module('innoApp', requires);

angular.bootstrap(document, ['innoApp'], {
    strictDi: true
});

angular.module('innoApp').config(['$compileProvider', ($compileProvider) => {
    $compileProvider.debugInfoEnabled(false);
}]);


