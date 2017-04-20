(function () {
  'use strict';

  angular
    .module('websiteNew')
    .directive('dsFeature', dsFeature);

  /** @ngInject */
  function dsFeature() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: "app/main/feature.html",
      scope: {
        featureName: '=',
        featureImgSrc: '=',
        featureClass: '=',
        featureDescription: '='
      }
    }
  }
})();
