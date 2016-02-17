'use strict';

/**
 * @ngdoc overview
 * @name angularjs3VideoplayerApp
 * @description
 * # angularjs3VideoplayerApp
 *
 * Main module of the application.
 */
angular
  .module('angularjs3VideoplayerApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    "com.2fdevs.videogular",
    "com.2fdevs.videogular.plugins.controls",
	"com.2fdevs.videogular.plugins.overlayplay",
	"com.2fdevs.videogular.plugins.poster"
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
