'use strict';

/**
 * @ngdoc overview
 * @name userdirectoryclientApp
 * @description
 * # userdirectoryclientApp
 *
 * Main module of the application.
 */
angular
  .module('userdirectoryclientApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui-notification',
    'pascalprecht.translate',  // angular-translate
    'tmh.dynamicLocale'        // angular-dynamic-locale
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .when('/logout', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'vm'
      })
      .when('/user/list', {
        templateUrl: 'views/userlist.html',
        controller: 'UsersCtrl',
        controllerAs: 'vm'
      })
      .when('/user/edit/:id', {
        templateUrl: 'views/useredit.html',
        controller: 'UserCtrl',
        controllerAs: 'vm'
      })
      .when('/user/create', {
        templateUrl: 'views/userform.html',
        controller: 'UsersCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).constant('LOCALES', {
    'locales': {        
        'en_US': 'English',
        'pl_PL': 'Polski'
    },
    'preferredLocale': 'en_US'
  }).config(function ($translateProvider) {
    $translateProvider.useMissingTranslationHandlerLog();
  }).config(function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: 'resources/locale-',// path to translations files
        suffix: '.json'// suffix, currently- extension of the translations
    });
    $translateProvider.preferredLanguage('en_US');// is applied on first load
    $translateProvider.useLocalStorage();// saves selected language to localStorage
  }).config(function (tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
  });
