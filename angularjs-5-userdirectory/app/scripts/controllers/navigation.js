'use strict';

/**
 * @ngdoc function
 * @name userdirectoryclientApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the userdirectoryclientApp
 */
angular.module('userdirectoryclientApp')
  .controller('NavigationCtrl', ['$scope', '$location', '$interval', 'loginFactory', 'sessionFactory', 'Notification', function ($scope, $location, $interval, loginFactory, sessionFactory, Notification) {
    
      $scope.getClass = function (path) { 
        if ($location.path().substr(0, path.length) == path) { 
            if (path == "/" && $location.path() == "/") { 
                return true; 
            } else if (path == "/") { 
                return false; 
            } 
            return true; 
        } else { 
            return false;
        }
      };   
      
      $scope.logout = function(){                
          loginFactory.logout();
      };
      
      $scope.isUserLoggedIn = function() {
        var userToken = sessionFactory.getUserToken();
        var userlevel = sessionFactory.getUserLevel();
        
        return userToken.length > 0;
      }; 
      
      $scope.isUser = function() {
        var userToken = sessionFactory.getUserToken();
        var userlevel = sessionFactory.getUserLevel();
        
        return userToken.length > 0 && userlevel >= 0;
      }; 
      
      $scope.isPowerUser = function() {
        var userToken = sessionFactory.getUserToken();
        var userlevel = sessionFactory.getUserLevel();
        
        return userToken.length > 0 && userlevel > 0;
      }; 
      
      $scope.isAdmin = function() {
        var userToken = sessionFactory.getUserToken();
        var userlevel = sessionFactory.getUserLevel();
        
        return userToken.length > 0 && userlevel > 10;
      }; 
      
      $scope.isJedi = function() {
        var userToken = sessionFactory.getUserToken();
        var userlevel = sessionFactory.getUserLevel();
        
        return userToken.length > 0 && userlevel > 20;
      }; 
      
      $scope.getUserFullName = function() {
        return sessionFactory.getUserFullName();
      };
      
      $scope.getUserLevelName = function() {
          
        var levels = [];
        var userlevel = sessionFactory.getUserLevel();
        var result = "";  
          
        levels.push({level:0,name:"User"});
        levels.push({level:10,name:"Power User"});
        levels.push({level: 20,name:"Admin"});
        levels.push({level: 30,name: "Jedi"});  
          
        levels.forEach(function(lvl){
            if (lvl.level == userlevel){
                result = lvl.name;
            }
        });
          
        return result;
      };
      
      
      sessionFactory.notifyLogin = function(){
        Notification.success('Logged in');
      }
      
      sessionFactory.notifyErrorLogin = function(){
        Notification.warning('Error login');
      }
      
      sessionFactory.notifyLogoff = function(){
        Notification.success('Logged off');
        $location.path('/');          
      }
            
      $interval(function() {     
          if( $scope.isUserLoggedIn() ){
            loginFactory.pingpong();
          }
      }, 5000);
              
  }]);
