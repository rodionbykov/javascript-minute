(function() {
  'use strict';

  angular
    .module('unitcalculator')
    .controller('ImperialController', ['ImperialConverter', ImperialController]);

  /** @ngInject */
  function ImperialController(ImperialConverter) {
    var vm = this;
    vm.name = 'Imperial System';
    vm.inputKind = "length";
    vm.inputValue = 0;
    vm.inputUnit = {"key":"miles","value":"Miles"};
    vm.inputUnits = ImperialConverter.getInputUnits(vm.inputKind);

    vm.convert = function(toUnit){
        return ImperialConverter.convert(vm.inputKind, vm.inputValue, vm.inputUnit.key, toUnit);
    };

    vm.getKind = function(){
      return vm.inputKind;
    };

    vm.setKind = function(inputKind){
      vm.inputKind = inputKind;
      vm.inputUnits = ImperialConverter.getInputUnits(vm.inputKind);
    }
  }

})();
