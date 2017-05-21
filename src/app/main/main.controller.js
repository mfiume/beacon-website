(function() {
  'use strict';

  angular
    .module('websiteNew')
    .controller('MainController', MainController);



  /** @ngInject */
  function MainController($window, $httpParamSerializerJQLike, _, $modal) {
    var vm = this;


    vm.activeSection = '';

    vm.coordinates = {};

    vm.typewriterSource =  ['researchers', 'clinical labs', 'pharmaceutical companies', 'genetic testing companies','developers'];

    // Set of assemblies (reference sets)
    vm.assembly = 'GRCh37';
    vm.assemblies = ['NCBI36','GRCh37','GRCh38'];

    vm.searchBRCA2Variant = searchBRCA2Variant;
    vm.searchBeacons = searchBeacons;
    vm.subscribe = openChimpModal;
    vm.watchVideo = openVideoModal;



    vm.partners = [
      { url: 'http://genomicsandhealth.org/', logoSrc: 'assets/images/logo-ga4gh-wt-nq8.png'},
      { url: 'https://www.elixir-europe.org/', logoSrc: 'assets/images/elixir.jpg'},
      { url: 'http://www.ebi.ac.uk', logoSrc: 'assets/images/ebi.png'}

    ];


   var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data/news.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            //alert(xobj.responseText);
            vm.news=JSON.parse(xobj.responseText);
          }
    };
    xobj.send(null); 


    activate();

    ///////////

    function activate() {
    }

    function searchBeacons() {
      var query = _.assign({
        beacon: 0,
        rs: vm.assembly
      }, vm.coordinates);

      searchVariant(query);
    }

    function searchBRCA2Variant() {
      var query = {
        allele: 'C',
        beacon: 0,
        chrom: '13',
        pos: 32936732,
        ref: 'G',
        rs: 'GRCh37'
      };

      searchVariant(query);
    }

    function searchVariant(query, url) {
      url = url || 'https://beacon-network.org//#/search';
      var params = $httpParamSerializerJQLike(query);
      $window.location.href = url + '?' + params;
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
  }
})();
