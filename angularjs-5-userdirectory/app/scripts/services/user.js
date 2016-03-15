'use strict';

/**
 * @ngdoc service
 * @name userdirectoryclientApp.users
 * @description
 * # user
 * Factory in the userdirectoryclientApp.
 */
angular.module('userdirectoryclientApp')
  .factory('userFactory', ['$resource', 'serviceURL', function ($resource, serviceURL) {
      return {
        repository: function (xtoken) {
          return $resource( serviceURL + '/users/:id', {id:'@id'}, {
              get: { method:'GET', headers:{'x-token':xtoken} },
              save: { method:'POST', headers:{'x-token':xtoken} },
              delete : { method:'DELETE', headers:{'x-token':xtoken} }
          });
        }
      };
  }]);
