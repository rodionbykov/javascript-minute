(function() {
  'use strict';

  angular
    .module('unitcalculator')
    .factory('imperialConverter', imperialConverter);

  /** @ngInject */
  function imperialConverter() {
    var converter = {};

    converter.inches2inches = function(value){ return value * 1 }
    converter.inches2feet = function(value){ return value / 12 }
    converter.inches2yards = function(value){ return value / 36 }
    converter.inches2meters = function(value){ return value * 0.0254 }
    converter.inches2chains = function(value){ return value / 792 }
    converter.inches2furlongs = function(value){ return value / 7920 }
    converter.inches2miles = function(value){ return value / 63360 }

    converter.feet2inches = function(value){ return value * 12 }
    converter.feet2feet = function(value){ return value * 1 }
    converter.feet2yards = function(value){ return value / 3 }
    converter.feet2meters = function(value){ return value * 0.3048 }
    converter.feet2chains = function(value){ return value / 66 }
    converter.feet2furlongs = function(value){ return value / 660 }
    converter.feet2miles = function(value){ return value / 5280 }

    converter.yards2inches = function(value){ return value * 36 }
    converter.yards2feet = function(value){ return value * 3 }
    converter.yards2yards = function(value){ return value * 1 }
    converter.yards2meters = function(value){ return value * 0.9144 }
    converter.yards2chains = function(value){ return value / 22 }
    converter.yards2furlongs = function(value){ return value / 220 }
    converter.yards2miles = function(value){ return value / 1760 }

    converter.chains2inches = function(value){ return value * 792 }
    converter.chains2feet = function(value){ return value * 66 }
    converter.chains2yards = function(value){ return value * 22 }
    converter.chains2meters = function(value){ return value * 20.1168 }
    converter.chains2chains = function(value){ return value * 1 }
    converter.chains2furlongs = function(value){ return value / 10 }
    converter.chains2miles = function(value){ return value / 80 }

    converter.furlongs2inches = function(value){ return value * 7920 }
    converter.furlongs2feet = function(value){ return value * 660 }
    converter.furlongs2yards = function(value){ return value * 220 }
    converter.furlongs2meters = function(value){ return value * 201.168 }
    converter.furlongs2chains = function(value){ return value * 10 }
    converter.furlongs2furlongs = function(value){ return value * 1 }
    converter.furlongs2miles = function(value){ return value / 8 }

    converter.miles2inches = function(value){ return value * 63360 }
    converter.miles2feet = function(value){ return value * 5280 }
    converter.miles2yards = function(value){ return value * 1760 }
    converter.miles2meters = function(value){ return value * 1609.344 }
    converter.miles2chains = function(value){ return value * 80 }
    converter.miles2furlongs = function(value){ return value * 8 }
    converter.miles2miles = function(value){ return value * 1 }

    converter.convert = function(fromValue, fromUnit, toUnit) {
        for(var p in converter){
            // listing all elements in unitConverter object
            // if element's name is a combination of fromUnit argument and toUnit argument eg. miles2meters
            // and if element is a function, then we can run this method to get conversion
            if(p == fromUnit + "2" + toUnit && angular.isFunction(converter[p])) {
              return converter[p](fromValue);
            }
        }
    }

    return converter;
  }

})();
