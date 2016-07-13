(function() {
  'use strict';

  angular
    .module('unitcalculator')
    .factory('ImperialAreaConverter', ImperialAreaConverter);

  /** @ngInject */
  function ImperialAreaConverter() {
    var converter = {};

    var inputUnits = [
      {key:"sqinches", value:"Square Inches"},
      {key:"sqfeet", value:"Square Feet"},
      {key:"sqm", value:"Square Meters"},
      {key:"sqchains", value:"Square Chains"},
      {key:"acres", value:"Acres"},
      {key:"ha", value:"Hectares"},
      {key:"sqkm", value:"Square Kilometers"},
      {key:"sqmiles", value:"Square Miles"}
    ];

    var conversions = {
      sqinches : {
        sqinches : function(a) { return a },
        sqfeet : function(a) { return a / 144 },
        sqm : function(a) { return a * 0.0254 * 0.0254 },
        sqchains : function(a) { return a / (4356 * 144) },
        acres : function(a) { return a / (43560 * 144) },
        ha : function(a) { return  a * 0.0254 * 0.0254 / 10000 },
        sqkm : function(a) { return a * 0.0254 * 0.0254 / 1000000 },
        sqmiles : function(a) { return a / (640 * 43560 * 144) }
      },
      sqfeet : {
        sqinches : function(a) { return a * 144 },
        sqfeet : function(a) { return a },
        sqm : function(a) { return a * 0.09290341 },
        sqchains : function(a) { return a / 4356 },
        acres : function(a) { return a / 43560 },
        ha : function(a) { return  a * 0.348 * 0.348 / 10000 },
        sqkm : function(a) { return a * 0.348 * 0.348 / 1000000 },
        sqmiles : function(a) { return a / (640 * 43560) }
      },
      sqm : {
        sqinches : function(a) { return a * 1550 },
        sqfeet : function(a) { return a / 0.09290341 },
        sqm : function(a) { return a },
        sqchains : function(a) { return a / 404.6873 },
        acres : function(a) { return a / 4046.85643 },
        ha : function(a) { return  a / 10000 },
        sqkm : function(a) { return a / 1000000 },
        sqmiles : function(a) { return a / 2589988.11 }
      },
      sqchains : {},
      acres : {},
      ha : {
        sqinches : function(a) { return a * 15500000 },
        sqfeet : function(a) { return 10000* a / 0.09290341 },
        sqm : function(a) { return 10000 },
        sqchains : function(a) { return a / 404.6873 },
        acres : function(a) { return a / 4046.85643 },
        ha : function(a) { return  a },
        sqkm : function(a) { return a / 100 },
        sqmiles : function(a) { return 1 }
      },
      sqkm : {},
      sqmiles : {}
    };

    converter.getInputUnits = function(){
      return inputUnits;
    }

    converter.convert = function(fromValue, fromUnit, toUnit) {
      return conversions[fromUnit][toUnit](fromValue);
    }

    return converter;
  }

})();
