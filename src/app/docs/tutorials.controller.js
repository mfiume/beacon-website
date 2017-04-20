(function() {
  'use strict';

  angular
    .module('websiteNew')
    .controller('TutorialsController', TutorialsController);

  /** @ngInject */
  function TutorialsController($modal) {

    var vm = this;

    vm.list = [
      {
        title : "Create an organization and project",
        description : "Learn how to create an organization and project. You need to be a member of a project in order to use DNAstack.",
        videoId : 188097780
      },
      {
        title : "Invite collaborators to a project",
        description : "Learn how to send an invitation to a project to a collaborator. Invitations are sent by email, and collaborators can accept using their existing DNAstack account or create a new one.",
        videoId : 188094724
      },
      {
        title : "Upload data and perform bioinformatics processing",
        description : "Learn how to upload reads (in FASTQ format), read alignments (in BAM/CRAM format), and genetic variants (in VCF format).",
        videoId : 188095706
      },
      /*
      {
        title : "Execute Broad's Best Practices bioinformatics",
        description : "Learn how to perform Broad's Best Practices pipeline to convert raw reads (in FASTQ format) into a list of genetic variants (in VCF format).",
        videoId : 188094583
      },
      */
      {
        title : "Share genetic variants through Beacon",
        description : "Learn how to light a Beacon, making your genetic variants discoverable through the Beacon Network. Beacon is a GA4GH-compliant method for sharing variant datasets.",
        videoId : 188094586
      }
    ];

    vm.watchVideo = openVideoModal;

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
