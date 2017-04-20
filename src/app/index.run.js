(function() {
  'use strict';

  angular
    .module('websiteNew')
    .run(runBlock);

  /** @ngInject */
  function runBlock($state, $rootScope, $document) {
    $rootScope.$state = $state;
    /*eslint-disable */
    $rootScope.$on('$stateChangeSuccess', function() {
      $document.scrollTop(0);
    });
    /*eslint-enable */
  }

})();
