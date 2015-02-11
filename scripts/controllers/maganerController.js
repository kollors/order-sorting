angular.module('app').controller('managerController', managerController);

managerController.$inject = ['$scope', '$storage', '$interval'];
function managerController(scope, storage, interval) {
    /*interval(function () {
        storage.getOrders(function (data) {
            scope.orders = data;
            //console.log(data);
        });
    }, 10000); // 10 sec*/

    scope.manager = {};
    scope.getManagerInfo = storage.getManagerInfo(function (data) {
        scope.manager = data;
        scope.test = navigator.userAgent;
    });

    scope.orders = {};
    scope.getOrders = storage.getOrders(function (data) {
        scope.orders = data;
        scope.getOrderById(0, 1234);
    });

    scope.order = {};
    scope.getOrderById = function (index, orderId) {
        scope.order = scope.orders[index];
        storage.getManagerOrderById(orderId, function (data) {
            scope.order.info = data;
            console.log(scope.order.info);
        });
    };

    scope.selectedItem = {};
    scope.setSelectedItem = function (item) {
        scope.selectedItem = item;
    };



    scope.setDifferedItem = function () {
        //TODO ЧАЙКА ЛЕТЕЛА НАД ЗЕМЛЕЙ И СЛОМАЛА НОГО
        //TODO НИЧЕГО НЕ РАБОТАЕТ ВОТ ИСТИНА ЧАЙКИ

        /*// копируем текущий объект
        //var copyOrder =
        // удаляем из исходного отложенную позицию
        scope.order.info.splice(scope.selectedItem.index, 1);
        // изменяем статус на отложенный
        //copyOrder.deffered = true;

        var isDeffered = false;
        angular.forEach(scope.orders, function (order) {
            if (order.number == scope.number) { // находим текущий заказ
                if (order.deffered == true) { // заказ уже есть в отложенных
                    isDeffered = true;
                }
            }
        });

        if (isDeffered) { // добавляем новые отложенные позиции
            //console.log('TCNM');
        } else { // создаем новый отложенный заказ
            var clone = angular.copy(scope.order);
            clone.deffered = true;
            clone.info = [];
            clone.info.push(scope.selectedItem.index);
            scope.orders.push(clone);
        }

        console.log(scope.orders);*/







        //copyOrder.info.push(scope.selectedItem);


        // добавляем в scope
        //;


/*

        console.log(copyOrder.number);
        console.log(scope.order.number);*/
    };

















/*

    scope.selectedIndex = 0;
    scope.selectedItem = {};
    scope.selectedCategory = "";
    scope.setSelectedItem = function (index, item, category) {
        scope.selectedIndex = index;
        scope.selectedItem = item;
        scope.selectedCategory = category;
    };

    scope.setDifferedItem = function () {
        var orderCopy = angular.copy(scope.order);
        orderCopy.deffered = true;

        // новый
        orderCopy.info = [];
        var temp = angular.copy(scope.order.info[scope.selectedCategory][scope.selectedIndex]);
        orderCopy.info.push(temp);
        console.log(orderCopy);


        scope.orders.push(orderCopy);

        // удаление из текущего заказа позиции которая выбрана как отложенная
        scope.order.info[scope.selectedCategory].splice([scope.selectedIndex], 1);
        //
*//*
        console.log(scope.selectedIndex);
        console.log(scope.selectedItem);
        console.log(scope.selectedCategory);

        console.log(orderCopy);*//*

        //console.log(scope.order[scope.selectedCategory][scope.selectedIndex]);
        *//*
        angular.forEach(function () {
            //
        });


        console.log(scope.order.info);
        console.log(scope.selectedItem);


*//*
        *//*var temp = angular.copy(scope.order);
        temp.info = {};
        temp.info[scope.selectedCategory] = [];
        temp.info[scope.selectedCategory].push(scope.selectedItem);

        console.log(temp);*//*

        //console.log(scope.orders);


*//*

*//*

        //console.log(scope.order);
    };*/

    /*scope.getOrderById = function (index, orderId) {
        scope.order = scope.orders[index];
        storage.getOrderById(orderId, function (data) {
            scope.order.info = [];
            data.forEach(function (info) {
                if (info.hasOwnProperty('description')) {
                    scope.order.description = info.description;
                } else {
                    scope.order.info.push(info); // добавляем товар
                }
                if (info.components != undefined) {
                    info.components.forEach(function (component) {
                        scope.order.info.push(component); // добавляем компонент
                    });
                }
            });
        });
    };*/


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