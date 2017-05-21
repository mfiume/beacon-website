(function() {
  'use strict';

  angular
    .module('websiteNew')
    .controller('InfoController', InfoController);

  /** @ngInject */
  function InfoController($modal) {

    var vm = this;

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data/members.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            //alert(xobj.responseText);
            vm.leader=JSON.parse(xobj.responseText);
            vm.activeMemberId = vm.leader[0].id;
          }
    };
    xobj.send(null);  

    var xobj2 = new XMLHttpRequest();
    xobj2.overrideMimeType("application/json");
    xobj2.open('GET', 'data/nodes.json', true); // Replace 'my_data' with the path to your file
    xobj2.onreadystatechange = function () {
          if (xobj2.readyState == 4 && xobj2.status == "200") {
            vm.nodes=JSON.parse(xobj2.responseText);
          }
    };
    xobj2.send(null);  


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
