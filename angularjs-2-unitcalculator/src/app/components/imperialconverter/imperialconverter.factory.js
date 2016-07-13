(function() {
  'use strict';

  angular
    .module('unitcalculator')
    .factory('ImperialConverter', ['ImperialLengthConverter', 'ImperialAreaConverter', ImperialConverter]);

    /** @ngInject */
    function ImperialConverter(ImperialLengthConverter, ImperialAreaConverter) {
      var converter = {};

      converter.convert = function(inputKind, inputValue, fromUnit, toUnit){
        switch(inputKind) {
          case "length":
            return ImperialLengthConverter.convert(inputValue, fromUnit, toUnit);
            break;
          case "area":
            return ImperialAreaConverter.convert(inputValue, fromUnit, toUnit);
            break;
          default:
            return ImperialLengthConverter.convert(inputValue, fromUnit, toUnit);
        }
      };

      converter.getInputUnits = function(inputKind){
        switch(inputKind) {
          case "length":
            return ImperialLengthConverter.getInputUnits();
            break;
          case "area":
            return ImperialAreaConverter.getInputUnits();
            break;
          default:
            return ImperialLengthConverter.getInputUnits();
        }
      }

      return converter;
    }

})();
