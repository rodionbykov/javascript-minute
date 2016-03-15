'use strict';

/**
 * @ngdoc service
 * @name userdirectoryclientApp.loginService
 * @description
 * # login
 * Factory in the userdirectoryclientApp.
 */
angular.module('userdirectoryclientApp')
  .factory('loginFactory', ['$http', 'sessionFactory', 'serviceURL', function($http, sessionFactory, serviceURL) {
     return {
        login: function(username, passwd) {

            $http({
              method: 'POST',
              url: serviceURL + '/users/login',
              data: $.param({'login':username,'passwd':passwd}),
              headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).then(function successCallback(response) {
                console.log(response.data);
                sessionFactory.setUserToken(response.data.securityToken);
                sessionFactory.setUserLevel(response.data.level);
                sessionFactory.setUserFullName(response.data.firstName + ' ' + response.data.lastName);
                sessionFactory.notifyLogin();
              }, function errorCallback(response) {
                sessionFactory.setUserToken('');
                sessionFactory.setUserLevel(0);
                sessionFactory.setUserFullName('');
                sessionFactory.notifyErrorLogin();
              });

        },

        pingpong: function(token) {

            $http({
              method: 'GET',
              url: serviceURL + '/users/pingpong',
              headers: {'x-token':sessionFactory.getUserToken()}
            }).then(function successCallback(response) {
                console.log(response.data);
                if(response.data.securityToken == null){
                    if(sessionFactory.getUserToken().length > 0){
                        sessionFactory.notifyLogoff();
                    }
                    sessionFactory.setUserToken('');
                    sessionFactory.setUserLevel(0);
                    sessionFactory.setUserFullName('');
                }else{
                    sessionFactory.setUserToken(response.data.securityToken);
                    sessionFactory.setUserLevel(response.data.level);
                    sessionFactory.setUserFullName(response.data.firstName + ' ' + response.data.lastName);

                }
              }, function errorCallback(response) {

              });

        },

        logout: function(username, passwd) {

            $http({
              method: 'DELETE',
              url: serviceURL + '/users/logout',
              headers: {'x-token':sessionFactory.getUserToken()}
            }).then(function successCallback(response) {
                console.log(response.data);
                sessionFactory.setUserToken('');
                sessionFactory.setUserLevel(0);
                sessionFactory.setUserFullName('');
                sessionFactory.notifyLogoff();
              }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
              });

        }
     };
  }]);
