var routerApp = angular.module('routerApp', [
    'ngRoute'
]);
routerApp.config(function ($routeProvider) {
    $routeProvider.when('/page_a', {
        templateUrl: 'routerViews/a.html',
    }).when('/page_b', {
        templateUrl: 'routerViews/b.html',
    }).otherwise({
        redirectTo: '/page_a'
    })
})