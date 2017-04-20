(function () {
  'use strict';

  angular
    .module('websiteNew')
    .directive('dsScroll', dsScroll);

  /** @ngInject */
  function dsScroll($window, $timeout) {
    return {
      link: function (scope) {

        // Last Y page position used to determine direction of scrolling to hide the top-nav on small screens.
        var lastY = 0;

        scope.motionState = {
          isUp: true,
          isScrolled: false,
          isNavigating: false,
          isScrollingUp: false
        };

        activate();

        ////////////

        function activate() {
          // Check the position initially (i.e. when the page is refreshed and scrolled automatically to the center)
          $timeout(checkScrollPosition, 0);
          // Check the position after each scroll event;
          $timeout(registerScrollListener, 0);
        }

        function registerScrollListener() {
          angular.element($window).on('scroll', checkScrollPosition);
        }

        function checkScrollPosition() {

          scope.screenWidth = $window.innerWidth;

          var currentY = $window.pageYOffset;
          var direction = currentY - lastY >= 0;

          if (currentY > 0) {
            scope.motionState.isScrolled = true;
          } else {
            scope.motionState.isUp = true;
            scope.motionState.isScrolled = false;
            direction = false;
          }

          scope.motionState.isScrollingUp = !(direction || scope.motionState.isNavigating);

          // TODO - this seems to clash with ui-router ($digest already in progress) in some special cases.
          // Using (global) events may be more convenient and stable.

          scope.$apply();

          lastY = currentY;
        }
      }
    }
  }
})();
