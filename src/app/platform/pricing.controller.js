(function() {
  'use strict';

  angular
    .module('websiteNew')
    .controller('PricingController', PricingController);

  /** @ngInject */
  function PricingController($modal) {

    var vm = this;

    vm.model = {
      informatics : {
        perExome : 5.0,
        perGenome : 15.0
      },
      storagePerGbPerMonth : 0.026,
      storage : {
        perExome: 2,
        perGenome: 100
      }
    };

    vm.calculator = {
      numExomes : 0,
      numGenomes : 1,
      storageInGb : 0
    };

    vm.subscribe = openChimpModal;

    ///////////

    function openChimpModal() {
      var modalInstance = $modal.open({
        templateUrl: 'app/mailchimp/mc-modal.html',
        controller: 'MailChimpModalController as mail'
      });

      modalInstance.result.then(function () {
        // Do something
      });
    }

  }
})();
