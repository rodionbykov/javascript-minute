(function() {
  'use strict';

  angular
    .module('unitcalculator')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('metric', {
        url: '/metric',
        templateUrl: 'app/metric/metric.html',
        controller: 'MetricController',
        controllerAs: 'metric'
      })
      .state('imperial', {
        url: '/imperial',
        templateUrl: 'app/imperial/imperial.html',
        controller: 'ImperialController',
        controllerAs: 'imperial'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
