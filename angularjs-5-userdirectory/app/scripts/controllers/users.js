'use strict';

/**
 * @ngdoc function
 * @name userdirectoryclientApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the userdirectoryclientApp
 */
angular.module('userdirectoryclientApp')
  .controller('UsersCtrl', ['$scope', '$location', 'usersFactory', 'sessionFactory', 'Notification', function ($scope, $location, usersFactory, sessionFactory, Notification) {    
      $scope.users = [];
      
      var repo = usersFactory.repository(sessionFactory.getUserToken);
      
      $scope.user = {id:0,login:'',passwd:'',firstName:'',lastName:'',level:0,securityToken:''};          
      
      $scope.levels = [];
      $scope.levels.push({level:0,name:"User"});
      $scope.levels.push({level:10,name:"Power User"});
      $scope.levels.push({level: 20,name:"Admin"});
      $scope.levels.push({level: 30,name: "Jedi"});            
      
      try{
          repo.query().$promise.then(function(result){
                $scope.users = result;          
                $scope.users.forEach(function(u) {             
                    $scope.levels.forEach(function(l) {                              
                        if(u.level == l.level) { 
                            u.levelName = l.name; 
                        }
                    });
                });              
            });
          
      }catch(e){
        console.log(e);
      }    
      
      $scope.userlevel = sessionFactory.getUserLevel();  
            
      $scope.addUser = function(){  
        console.log($scope.user);
        repo.add($scope.user).$promise.then(
        function(result){            
            Notification.success('User added');
            $location.path('/user/list');
        },
        function(result){
            Notification.error('User not added: ' + result.data.rootCause.message);
        });        
      };      
      
  }]);
