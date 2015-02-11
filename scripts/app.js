angular.module('app', ['ankular', 'ngRoute']).config(configuration);

configuration.$inject = ['$routeProvider'];
function configuration(routeProvider) {
    routeProvider
        .when('/admin', {
            templateUrl: 'views/admin.html',
            controller:  'adminController'
        })
        .when('/manager', {
            templateUrl: 'views/manager.html',
            controller:  'managerController'
        })
        .otherwise({templateUrl: 'views/index.html'});
}