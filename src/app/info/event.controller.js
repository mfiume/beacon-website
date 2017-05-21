(function() {
  'use strict';

  angular
    .module('websiteNew')
    .controller('EventController', EventController);

  /** @ngInject */
  function EventController($window, $httpParamSerializerJQLike, _, $modal) {
    var vm = this;


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

    var xobj2 = new XMLHttpRequest();
    xobj2.overrideMimeType("application/json");
    xobj2.open('GET', 'data/conf.json', true); // Replace 'my_data' with the path to your file
    xobj2.onreadystatechange = function () {
          if (xobj2.readyState == 4 && xobj2.status == "200") {
            //alert(xobj.responseText);
            vm.conf=JSON.parse(xobj2.responseText);
          }
    };
    xobj2.send(null);  


    activate();

    ///////////

    function activate() {
    }
  }
})();
