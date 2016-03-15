'use strict';

/**
 * @ngdoc service
 * @name userdirectoryclientApp.users
 * @description
 * # users
 * Factory in the userdirectoryclientApp.
 */
angular.module('userdirectoryclientApp')
  .factory('usersFactory', ['$resource', 'serviceURL', function ($resource, serviceURL) {
      return {
        repository: function (xtoken) {
          return $resource( serviceURL + '/users', {}, {
              query: { method:'GET', isArray:true, headers:{'x-token':xtoken} },
              add: { method:'POST', headers:{'x-token':xtoken} }
          });
        }
      };
  }]);
