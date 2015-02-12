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
    MANAGER
     */
    this.getOrders = function (callback) {
        http.post('_data/manager/orders.json').success(callback);
    };

    this.getManagerInfo = function (callback) {
        http.post('_data/manager/manager.json').success(callback);
    };

    this.getManagerOrderById = function (orderId, callback) {
        http.post('_data/manager/orders/' + orderId + '.json').success(callback);
    };

    this.setDifferedItem = function (item, callback) {
        console.log(item);
    };

    /*
    STOREKEEPER
     */
    this.getStorekeeperInfo = function (callback) {
        http.post('_data/storekeeper/storekeeper.json').success(callback);
    };

    this.getStorekeeperOrders = function (callback) {
        http.post('_data/storekeeper/orders.json').success(callback);
    };
    this.getStorekeeperOrderById = function (orderId, callback) {
        http.post('_data/storekeeper/orders/' + orderId + '.json').success(callback);
    };

    this.setItemStatus = function (item) {
        console.log(item);
    };

    this.setOrderStatus = function (orderId) {
        console.log(orderId);
    };

    /*
     ASSISTANT
     */
    this.getAssistantInfo = function (callback) {
        http.post('_data/assistant/assistant.json').success(callback);
    };

    this.getAssistantOrders = function (callback) {
        http.post('_data/assistant/orders.json').success(callback);
    };
    this.getAssistantOrderById = function (orderId, callback) {
        http.post('_data/assistant/orders/' + orderId + '.json').success(callback);
    };

    this.setItemStatus = function (item) {
        console.log(item);
    };

    this.setOrderStatus = function (orderId) {
        console.log(orderId);
    };

    this.getOrdersByItem = function (itemId, callback) {
        http.post('_data/assistant/' + itemId + '.json').success(callback);
    };
























}