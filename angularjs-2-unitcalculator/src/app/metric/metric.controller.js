(function() {
  'use strict';

  angular
    .module('unitcalculator')
    .controller('MetricController', MetricController);

  /** @ngInject */
  function MetricController() {
    var vm = this;
    vm.name = 'Metric System';
  }

})();
