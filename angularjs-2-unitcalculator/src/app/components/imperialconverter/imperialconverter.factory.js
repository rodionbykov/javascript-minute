(function() {
  'use strict';

  angular
    .module('unitcalculator')
    .factory('ImperialConverter', ['ImperialLengthConverter', ImperialConverter]);

    /** @ngInject */
    function ImperialConverter(ImperialLengthConverter) {
      var converter = {};

      converter.convert = ImperialLengthConverter.convert; // pass function

      return converter;
    }

})();
