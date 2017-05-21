(function() {
  'use strict';

  angular
  .module('websiteNew')
  .controller('DeploymentController', DeploymentController);

  /** @ngInject */
  function DeploymentController() {

    var vm = this;

    vm.nodes = [
    {
      id: "France",
      name: "CBiB",
      url: "https://services.cbib.u-bordeaux.fr/beacon-web/",
      logo: "assets/images/cbib_logo.jpeg",
      width: 40,
      height: 40
    },
    {
      id: "Spain",
      name: "CRG",
      url: "https://ega.crg.eu/beacon_web/#/",
      logo: "assets/images/crg_logo.png",
      width: 30,
      height: 30
    },
    {
      id: "Finland",
      name: "Elixir Finland",
      url: "http://elixir-beacon.csc.fi/#/",
      logo: "assets/images/elixir_finland_logo.png",
      width: 30,
      height: 30
    },
    {
      id: "Sweden",
      name: "Elixir Sweden",
      url: "https://swefreq.nbis.se/#/dataBeacon/",
      logo: "assets/images/elixir_sweden_logo.png",
      width: 30,
      height: 30
    },
    {
      id: "Switzerland",
      name: "Elixir Switzerland",
      url: "hhttp://beacon.arraymap.org/",
      logo: "assets/images/elixir_switzerland_logo.png",
      width: 40,
      height: 40
    },
    ];
    activate();

    ///////////

    function activate() {
    }
  }
})();
