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

    vm.typewriterSource =  ['researchers', 'clinical labs', 'pharmaceutical companies', 'genetic testing companies',
      'developers'];

    // Set of assemblies (reference sets)
    vm.assembly = 'GRCh37';
    vm.assemblies = ['NCBI36','GRCh37','GRCh38'];

    vm.searchBRCA2Variant = searchBRCA2Variant;
    vm.searchBeacons = searchBeacons;
    vm.subscribe = openChimpModal;
    vm.watchVideo = openVideoModal;

    vm.partners = [

      { url: 'https://cloud.google.com/genomics', logoSrc: 'assets/images/logo-google-wt-nq8.png' },
      { url: 'http://jlabs.jnjinnovation.com', logoSrc: 'assets/images/logo-jnj-wt-nq8.png'},
      { url: 'https://www.marsdd.com', logoSrc: 'assets/images/logo-mars-wt-nq8.png' },
      { url: 'http://www.sickkids.ca/', logoSrc: 'assets/images/logo-sk-wt-nq8.png' },
      { url: 'http://genomicsandhealth.org/', logoSrc: 'assets/images/logo-ga4gh-wt-nq8.png'},
      { url: 'http://www.genomecanada.ca/en/', logoSrc: 'assets/images/logo-genomecanada-wt-nq8.png'},
      { url: 'http://www.braininstitute.ca', logoSrc: 'assets/images/logo-obi-wt-nq8.png'},
      { url: 'http://www.oce-ontario.org', logoSrc: 'assets/images/logo-oce-wt-nq8.png'}

    ];

    vm.stories = [
      {
        title: "Canadian Research Group Announces C$700K in Funding for New Initiatives Program",
        publisher: "GenomeWeb",
        date: new Date(2016, 12-1, 19, 0, 0, 0, 0),
        imgsrc: "assets/images/logo-genomeweb-gray-nq8.png",
        imgheight: "40px",
        url: "https://www.genomeweb.com/informatics/canadian-research-group-announces-c700k-funding-new-initiatives-program"
      },
      {
        title: "GA4GH presents vision, model for genomic and clinical data sharing",
        publisher: "Science",
        date: new Date(2016, 6-1, 10, 0, 0, 0, 0),
        imgsrc: "assets/images/logo-science-gray.png",
        imgheight: "30px",
        url: "#/press/2016-06-10-science"
      },
      {
        title: "How Families Are Solving Genetic Mysteries With Big Data",
        publisher: "Financial Post",
        date: new Date(2016, 5-1, 23, 0, 0, 0, 0),
        imgsrc: "assets/images/logo-hpe-gray.png",
        imgheight: "60px",
        url: "https://www.hpematter.com/childhood-issue/New-World-of-Parenting-in-Age-of-Genotypes"
      },
      {
        title: "New pan-Canadian program to accelerate data sharing in biomedical research and patient care",
        publisher: "Genome Canada",
        date: new Date(2015, 12-1, 15, 0, 0, 0, 0),
        imgsrc: "assets/images/logo-gc-gray-nq8.png",
        imgheight: "60px",
        url: "http://www.genomecanada.ca/en/news-and-events/news-releases/new-pan-canadian-program-accelerate-data-sharing-biomedical-research"
      },
      {
        title: "Beacon Project Cracks the Door for Genomic Data Sharing",
        publisher: "BioIT World",
        date: new Date(2015, 8-1, 14, 0, 0, 0, 0),
        imgsrc: "assets/images/logo-bioit-gray-nq8.png",
        imgheight: "25px",
        url: "http://www.bio-itworld.com/2015/8/14/beacon-project-cracks-door-genomic-data-sharing.html"
      },
      {
        title: "Beacons for Data-sharing",
        publisher: "BioTechniques",
        date: new Date(2015, 8-1, 12, 0, 0, 0, 0),
        imgsrc: "assets/images/logo-biot-gray-nq8.png",
        url: "http://www.biotechniques.com/news/Beacons-for-Data-sharing/biotechniques-359902.html#.Vc4_CaPIu28"
      },
      {
        title: "10 Breakthrough Technologies: Internet of DNA",
        publisher: "MIT Technology Review",
        date: new Date(2015, 2-1, 18, 0, 0, 0, 0),
        imgsrc: "assets/images/logo-mit-gray-nq8.png",
        imgheight: "45px",
        url: "http://www.technologyreview.com/featuredstory/535016/internet-of-dna/"
      },
      {
        title: "Geneticists Begin Tests of an Internet for DNA",
        publisher: "MIT Technology Review",
        date: new Date(2014, 12-1, 17, 0, 0, 0, 0),
        imgsrc: "assets/images/logo-mit-gray-nq8.png",
        imgheight: "45px",
        url: "http://www.technologyreview.com/news/533416/geneticists-begin-tests-of-an-internet-for-dna/"
      }

    ];

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
