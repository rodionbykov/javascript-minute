(function() {
  'use strict';

  angular
    .module('unitcalculator')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
