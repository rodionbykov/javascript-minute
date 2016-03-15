'use strict';

/**
 * @ngdoc directive
 * @name userdirectoryclientApp.directive:UserRecord
 * @description
 * # UserRecord
 */
angular.module('userdirectoryclientApp')
  .directive('userRecord', function () {
    return {
      replace: true,
      templateUrl: 'scripts/templates/userrecord.tpl.html',
      restrict: 'A',
      scope: {
          userdata: '='
      },
      link: function postLink(scope, element, attrs) {
        //element.text('this is the UserRecord directive');
          // TODO: pass data to show here via scope (one way, @), add click function
      }
    };
  });
