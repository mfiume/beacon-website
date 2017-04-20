(function() {
  'use strict';

  angular
    .module('websiteNew')
    .controller('DevelopController', DevelopController);

  /** @ngInject */
  function DevelopController($modal) {

    var vm = this;

    vm.subscribe = openChimpModal;
    vm.watchVideo = openVideoModal;

    activate();

    ///////////

    function activate() {
    }

    function openVideoModal(title,vimeoId) {
      var modalInstance = $modal.open({
        templateUrl: 'app/video/video-modal.html',
        controller: 'VideoModalController as video',
        size: 'lg',
        resolve: {
          title: function () {
            return title;
          },
          vimeoId: function () {
            return vimeoId;
          }
        }
      });

      modalInstance.result.then(function () {
        // Do something
      });
    }

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
