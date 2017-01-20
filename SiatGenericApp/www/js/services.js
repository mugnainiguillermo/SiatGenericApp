angular.module('app.services', [])

.factory('localstorageFactory', ['$window', function ($window) {
    return {
        setlogUser: function (logUser) {
            $window.localStorage['logUser'] = JSON.stringify(logUser);
        },
        getlogUser: function () {
            console.log($window.localStorage['logUser']);
            if (typeof ($window.localStorage['logUser']) === 'undefined') {
                return 'undefined';
            } else {
                return JSON.parse($window.localStorage['logUser']);
            } 
        },
        setIdUser: function (idUsuario) {
            $window.localStorage['idUsuario'] = JSON.stringify(idUsuario);
        },
        getIdUser: function () {
            return JSON.parse($window.localStorage['idUsuario']);
        },
        setUsersRef: function (usersRef) {
            $window.localStorage['usersRef'] = JSON.stringify(usersRef);
        },
        getUsersRef: function () {
            return JSON.parse($window.localStorage['usersRef'] || '{}');
        },
        remove: function () {
            $window.localStorage.removeItem('logUser');
        }
    }
}])

.service('LoginService', ['$http', function ($http) {
    console.log("LoginService");
    return {
        loginUser: function (name, pw) {
            var info = "usuario=" + name + "&contrasenia=" + pw;
            console.log(info);
            return $http({
                        url: "http://www.e-siat.net/siat_webservice_test/index.php/logIn/inicioEspecialista",
                        method: "POST",
                        data: info,
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                    })
                    .success(function (data) {
                        console.log('data: ' + data[0]);
                        return data[0];
                    });
        }
    }
}])

.service('msjService', ['$http', function ($http) {
    console.log("msjService");
    return {
        msjUser: function (idUsuario) {
            var info = "id=" + idUsuario + "&since=0";
            console.log(info);
            return $http({
                        url: "http://www.e-siat.net/siat_webservice_test/index.php/mensajes/getMessages",
                        method: "POST",
                        data: info,
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                    })
                    .success(function (data) {
                        console.log('data: ' + data[0]);
                        return data[0];
                    });
        }
    }
}])

.service('BlankService', [function(){

}]);