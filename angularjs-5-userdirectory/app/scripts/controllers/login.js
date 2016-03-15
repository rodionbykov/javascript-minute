'use strict';

/**
 * @ngdoc function
 * @name userdirectoryclientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the userdirectoryclientApp
 */
angular.module('userdirectoryclientApp')
  .controller('LoginCtrl', ['loginFactory', 'sessionFactory', function (loginFactory, sessionFactory) {
      var vm = this;
      
      vm.login = function(loginData){                
          var user = loginFactory.login(loginData.username, loginData.passwd);          
      };
      
      vm.isUserLoggedIn = function() {
        var userToken = sessionFactory.getUserToken();
        var userlevel = sessionFactory.getUserLevel();
        
        return userToken.length > 0;
      }; 
      
  }]);
