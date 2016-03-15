'use strict';

/**
 * @ngdoc service
 * @name userdirectoryclientApp.session
 * @description
 * # session
 * Factory in the userdirectoryclientApp.
 */
angular.module('userdirectoryclientApp')
  .factory('sessionFactory', function () {    
    return {
        
      notifyLogoff: function() { 
          return true;                                
      },
        
      notifyLogin: function() { 
          return true;                                
      },
        
      notifyErrorLogin: function() { 
          return true;                                
      },
          
      setUserToken: function (xtoken) {
          sessionStorage.setItem('xtoken', xtoken);
          return true;
      },
          
      setUserLevel: function (userlevel) {
          sessionStorage.setItem('userlevel', userlevel);
          return true;
      },
        
      setUserFullName: function(fullName) {
        sessionStorage.setItem('fullname', fullName);
      },
        
      getUserToken: function () {   
          var result = '';
          if(sessionStorage.getItem('xtoken') !== null){
            result = sessionStorage.getItem('xtoken');            
          }
          return result;
      },
        
      getUserLevel: function () {
          var result = 0;
          if(sessionStorage.getItem('userlevel') !== null){
            result = sessionStorage.getItem('userlevel');            
          }
          return result;
      },
        
      getUserFullName: function () {   
          var result = '';
          if(sessionStorage.getItem('fullname') !== null){
            result = sessionStorage.getItem('fullname');            
          }
          return result;
      }
    };
  });
