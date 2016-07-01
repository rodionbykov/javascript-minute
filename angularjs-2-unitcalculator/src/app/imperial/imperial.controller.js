(function() {
  'use strict';

  angular
    .module('unitcalculator')
    .controller('ImperialController', ['ImperialConverter', ImperialController]);

  /** @ngInject */
  function ImperialController(ImperialConverter) {
    var vm = this;
    vm.name = 'Imperial System';
    vm.inputValue = 0;
    vm.inputUnit = 'miles';
    vm.convert = function(toUnit){
        return ImperialConverter.convert(vm.inputValue, vm.inputUnit, toUnit);
    };
  }

})();
