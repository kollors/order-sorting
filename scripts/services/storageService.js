angular.module('app').service('$storage', $storage);

$storage.$inject = ['$http'];
function $storage(http) {
    /*
    ADMIN
     */
    this.getUsers = function (callback) {
        http.post('_data/admin/users.json').success(callback);
    };

    this.getRoles = function (callback) {
        http.post('_data/admin/roles.json').success(callback);
    };

    this.getSetting = function (callback) {
        http.post('_data/admin/setting.json').success(callback);
    };

    this.setUserRole = function (user) {
        console.log(user);
    };

    this.setUserGrant = function (user) {
        console.log(user);
    };

    this.setSetting = function (setting) {
        console.log(setting);
    };

    this.createUser = function (user) {
        console.log(user);
    };

    /*
    COMMON
     */
    this.getOrders = function (callback) {
        http.post('_data/orders.json').success(callback);
    };

    this.getOrderById = function (orderId, callback) {
        http.post('_data/orders/' + orderId + '.json').success(callback);
    };

    /*
    MANAGER
     */
    this.getManagerInfo = function (callback) {
        http.post('_data/manager/manager.json').success(callback);
    };

    this.getManagerOrderById = function (orderId, callback) {
        http.post('_data/manager/orders/' + orderId + '.json').success(callback);
    };
}