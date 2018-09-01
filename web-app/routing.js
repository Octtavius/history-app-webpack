function ConfigRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    var home = {
        name: 'home',
        url: '/home',
        templateUrl: './history-view/partials/home.html',
        controller: 'ViewController'
    };

    var dashboard = {
        name: 'dashboard',
        url: '/dashboard',
        templateUrl: './dashboard/partials/dashboard.html',
        controller: 'DashboardController'
    };

    $stateProvider.state(home);
    $stateProvider.state(dashboard);
}

angular.module('history-app').config(ConfigRouter);