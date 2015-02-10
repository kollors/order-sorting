angular.module('app').service('$storage', $storage);

$storage.$inject = ['$http'];
function $storage(http) {
    this.getUsers = function (callback) {
        http.post('_data/users.json').success(callback);
    };

    this.getRoles = function (callback) {
        http.post('_data/roles.json').success(callback);
    };

    this.getSetting = function (callback) {
        http.post('_data/setting.json').success(callback);
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
}