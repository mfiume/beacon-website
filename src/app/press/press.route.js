(function () {
  'use strict';

  angular
    .module('website.press')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('press', {
        controller: 'PressController',
        controllerAs: 'press',
        url: '/press/:pressId',
        templateUrl: 'app/press/pressLayout.html'
      });
  }

})();
