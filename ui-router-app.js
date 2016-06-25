var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/main");

    $stateProvider
        //为主菜单声明abstract属性和template属性
        //那么视图就会自动加载到ui-view里
        .state('main', {
            url: '/main',
            templateUrl: 'uiRouterViews/main.html'
        })
        //通过"."的方式声明子视图
        //这样，就能实现嵌套路由了
        .state('main.pagea', {
            url: '/pagea',
            templateUrl: 'uiRouterViews/a.html'
        })
        .state('main.pageb', {
            url: '/pageb',
            templateUrl: 'uiRouterViews/b.html'
        })
});