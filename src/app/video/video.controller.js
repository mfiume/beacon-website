(function() {
  'use strict';

  angular
    .module('websiteNew')
    .controller('VideoModalController', VideoModalController);

  /** @ngInject */
  function VideoModalController($modalInstance, title, vimeoId) {

    var vm = this;

    vm.title = title;
    vm.vimeoId = vimeoId;

    vm.cancel = cancel;

    function cancel() {
      $modalInstance.dismiss('cancel');
    }
  }
})();
