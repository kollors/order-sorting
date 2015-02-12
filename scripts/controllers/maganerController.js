angular.module('app').controller('managerController', managerController);

managerController.$inject = ['$scope', '$storage', '$interval'];
function managerController(scope, storage, interval) {
    interval(function () {
        storage.getOrders(function (data) {
            scope.orders = data;
        });
    }, 10000); // 10 sec

    scope.manager = {};
    scope.getManagerInfo = storage.getManagerInfo(function (data) {
        scope.manager = data;
    });

    scope.orders = [];
    scope.quantityDefferedOrders = 0;
    scope.getOrders = storage.getOrders(function (data) {
        angular.forEach(data, function(order) {
            scope.orders.push(order);
            if (order.deffered) {
                scope.quantityDefferedOrders++;
            }
        });
        scope.getOrderById(0, 1234);
    });

    scope.order = {};
    scope.getOrderById = function (index, orderId) {
        scope.order = scope.orders[index];
        storage.getManagerOrderById(orderId, function (data) {
            scope.order.info = data;
        });
    };

    scope.selectedItem = {};
    scope.setSelectedItem = function (item) {
        scope.selectedItem = item;
        scope.selectedItem.number = scope.order.number;
    };

    scope.setDifferedItem = function () {
        scope.order.info.splice(scope.selectedItem.index, 1);
        storage.setDifferedItem(scope.selectedItem, function () {
            storage.getOrders();
        });
    };

    scope.createOrder = function () {
        console.log('123');
    };

    scope.setDeffered = function (status) {
        scope.order.deffered = status;
    };

    scope.componentStatus = function (status) {
        console.log(status);
    }
}