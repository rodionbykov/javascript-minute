(function() {
  'use strict';

  angular
    .module('unitcalculator')
    .controller('ImperialController', ImperialController);

  /** @ngInject */
  function ImperialController() {
    var vm = this;
    vm.name = 'Imperial System';
    vm.inputValue = 0;
    vm.milesToMeters = milesToMeters;
  }

  function inchesToMeters(inches){
    return inches * 0.0254;
  }

  function feetToMeters(feet){
    return feet * 0.3048;
  }

  function milesToMeters(miles){
    return miles * 1609.344;
  }

})();
