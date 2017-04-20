(function() {
  'use strict';

  angular
    .module('websiteNew')
    .controller('MailChimpModalController', MailChimpModalController);

  /** @ngInject */
  function MailChimpModalController($modalInstance) {

    var vm = this;

    vm.cancel = cancel;
    vm.isSubscribing = false;
    // TODO - new version of angular-mailchimp should $broadcast events
    vm.dsSubscribe = dsSubscribe;

    function dsSubscribe(){
      vm.isSubscribing = true;
      return true;
    }

    function cancel() {
      $modalInstance.dismiss('cancel');
    }
  }
})();
