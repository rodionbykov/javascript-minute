(function() {
  'use strict';

  angular
    .module('unitcalculator')
    .controller('ImperialController', ImperialController);

  /** @ngInject */
  function ImperialController() {
    var vm = this;
    vm.name = 'Imperial System';
  }

})();
