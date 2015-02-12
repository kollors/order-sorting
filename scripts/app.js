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
        .when('/storekeeper', {
            templateUrl: 'views/storekeeper.html',
            controller:  'storekeeperController'
        })
        .otherwise({templateUrl: 'views/index.html'});
}