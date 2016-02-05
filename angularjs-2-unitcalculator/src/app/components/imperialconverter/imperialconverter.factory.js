(function() {
  'use strict';

  angular
    .module('unitcalculator')
    .factory('imperialConverter', imperialConverter);

  /** @ngInject */
  function imperialConverter() {
    var converter = {};
      
    converter.inches2meters = function(value){
        return value * 0.0254;
    }

    converter.feet2meters = function(value){
        return value * 0.3048;
    }
    
    converter.yards2meters = function(value){
        return value * 0.9144;
    }
    
    converter.chains2meters = function(value){
        return value * 20.1168;
    }

    converter.furlongs2meters = function(value){
        return value * 201.168;
    }

    converter.miles2meters = function(value){
        return value * 1609.344;
    }
    
    converter.miles2inches = function(value){
        return value * 63360;
    }
    
    converter.miles2feet = function(value){
        return value * 5280;
    }
    
    converter.miles2yards = function(value){
        return value * 1760;
    }
      
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
