(function () {
  'use strict';

  angular
    .module('website.press')
    .controller('PressController', PressController);

  /** @ngInject */
  function PressController($stateParams) {

    var vm = this;
    vm.pressSrc = 'app/press/articles/' + $stateParams.pressId + '.html';
  }
})();
