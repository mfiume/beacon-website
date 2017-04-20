(function () {
  'use strict';

  angular
    .module('websiteNew')
    .controller('HeaderController', HeaderController);

  /** @ngInject */
  function HeaderController($timeout) {

    var vm = this;

    vm.setMotion = setMotion;
    vm.toggleNavigation = toggleNavigation;

    vm.navCollapsed = true;

    activate();

    ///////////

    function activate() {
    }

    function setMotion(isInMotion, motionState) {

      // Postpone for sync with the scroll directive
      $timeout(setMotionFn, 0);

      function setMotionFn() {
        if (motionState) {
          motionState.isNavigating = isInMotion;
          if (!isInMotion) {
            motionState.isScrollingUp = false;
          }
        }
      }
    }

    function toggleNavigation() {
      vm.navCollapsed = !vm.navCollapsed;
    }
  }
})();
