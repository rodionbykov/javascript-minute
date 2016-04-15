(function() {
  'use strict';

  angular
    .module('unitcalculator')
    .controller('ImperialController', ['imperialConverter', ImperialController]);

  /** @ngInject */
  function ImperialController(imperialConverter) {
    var vm = this;
    vm.name = 'Imperial System';
    vm.inputValue = 0;
    vm.inputUnit = 'miles';
    vm.convert = function(toUnit){
        return imperialConverter.convert(vm.inputValue, vm.inputUnit, toUnit);
    };
  }

})();
