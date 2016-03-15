'use strict';

/**
 * @ngdoc function
 * @name userdirectoryclientApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the userdirectoryclientApp
 */
angular.module('userdirectoryclientApp')
  .controller('UserCtrl', ['$scope', '$routeParams', '$location', 'userFactory', 'sessionFactory', 'Notification', function ($scope, $routeParams, $location, userFactory, sessionFactory, Notification) {    
      
      var repo = userFactory.repository(sessionFactory.getUserToken);
      
      $scope.user = {id:0,login:'',passwd:'',firstName:'',lastName:'',level:0,securityToken:''};
      
      $scope.levels = [];
      $scope.levels.push({level:0,name:"User"});
      $scope.levels.push({level:10,name:"Power User"});
      $scope.levels.push({level: 20,name:"Admin"});
      $scope.levels.push({level: 30,name: "Jedi"});
      
      if($routeParams.id !== undefined && $routeParams.id > 0){        
         repo.get({id: $routeParams.id}).$promise.then(function(result){
            $scope.user = result;
            $scope.levels.forEach(function(l) {                              
                    if($scope.user.level == l.level) { 
                        $scope.user.levelName = l.name; 
                    }
            });            
        });
      }
      
      $scope.userlevel = sessionFactory.getUserLevel();   
      
      $scope.editing = false;
      
      $scope.saveUser = function(){                           
        repo.save($scope.user).$promise.then(
        function(){
            Notification.success('User saved');
            $location.path('/user/list');
        },         
        function(result){
            Notification.error('User not saved: ' + result.data.rootCause.message);
        });        
      };
      
      $scope.deleteUser = function(){                           
        repo.delete({'id': $scope.user.id}).$promise.then(
        function(){
            Notification.success('User deleted');
            $location.path('/user/list');
        });        
      };
      
      $scope.toggleEdit = function(){
        $scope.editing = !$scope.editing;
      };
            
  }]);
