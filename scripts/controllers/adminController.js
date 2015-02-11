angular.module('app').controller('adminController', adminController);

adminController.$inject = ['$scope', '$storage'];
function adminController(scope, storage) {
    /**
     * массив объектов пользователей
     * @type {Array}
     */
    scope.users = [];

    /**
     * получение всех пользователей
     */
    scope.getUsers = storage.getUsers(function (data) {
        scope.users = data;
        scope.setUser(0);
    });

    /**
     * выбранный пользователь
     * @type {Object}
     */
    scope.user = {};

    /**
     * установка выбранного пользователя
     */
    scope.setUser = function (userId) {
        scope.user = scope.users[userId];
    };

    /**
     * массив объктов ролей
     * @type {Array}
     */
    scope.roles = [];

    /**
     * получение всех ролей
     */
    scope.getRoles = storage.getRoles(function (data) {
        scope.roles = data;
    });

    /**
     * установка пользовательской роли и обновление грантов
     * @param roleName
     */
    scope.setUserRole = function (roleName) {
        // устанавливает пользователю новую роль
        scope.user.role = roleName;

        // устанавливаем пользователю гранты
        angular.forEach(scope.roles, function (role) {
            if (role.title == roleName) {
                scope.user.grants = angular.copy(role.grants);
            }
        });

        storage.setUserRole(scope.user);
    };

    /**
     * установка пользовательских грантов
     */
    scope.setUserGrant = function () {
        storage.setUserGrant(scope.user);
    };

    scope.setUserPath = function (event) {
        event.target.blur();
        if (event.keyCode == 13 || event.type == 'blur') {
            storage.setUserRole(scope.user);
        }
    };

    /**
     * установка грантов для всех пользователей
     * @param roleGrant
     */
    scope.setUsersGrant = function (roleGrant) {
        angular.forEach(scope.users, function (user) {
            angular.forEach(user.grants, function (grant) {
                if (grant.title == roleGrant.title) {
                    grant.checked = roleGrant.checked;
                }
            });
        });
        storage.setUserGrant(roleGrant);
    };

    scope.setting = {};
    scope.getSetting = storage.getSetting(function (data) {
        scope.setting = data;
        console.log(data);
    });

    scope.setSetting = function () {
        console.log(scope.setting);
    };

    scope.userNew = {};
    scope.createUser = function () {
        console.log(scope.userNew);
    };
}




























//