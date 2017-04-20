(function() {
  'use strict';

  angular
    .module('websiteNew')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('privacy', {
        url: '/legal/privacy',
        templateUrl: 'app/legal/privacy.html'
      })
      .state('terms', {
        url: '/legal/terms',
        templateUrl: 'app/legal/termsofuse.html'
      })
      .state('platform', {
        url: '/platform',
        templateUrl: 'app/platform/platform.html',
        abstract: true
      })
      .state('platform.overview', {
        url: '/overview',
        templateUrl: 'app/platform/overview.html',
        controller: 'OverviewController',
        controllerAs: 'overview'
      })
      .state('platform.pricing', {
        url: '/pricing',
        templateUrl: 'app/platform/pricing.html',
        controller: 'PricingController',
        controllerAs: 'pricing'
      })
      .state('platform.documentation', {
        url: '/documentation',
        templateUrl: 'app/platform/documentation.html'
      })
      .state('team', {
        url: '/team',
        templateUrl: 'app/team/team.html',
        controller: 'TeamController',
        controllerAs: 'team',
        abstract: true
      })
      .state('team.mission', {
        url: '/mission',
        templateUrl: 'app/team/mission.html',
        controller: 'MissionController',
        controllerAs: 'mission'
      })
      .state('team.members', {
        url: '/members',
        templateUrl: 'app/team/members.html',
        controller: 'MembersController',
        controllerAs: 'members'
      })
      .state('docs', {
        url: '/docs',
        templateUrl: 'app/docs/docs.html',
        abstract: true
      })
      .state('docs.develop', {
        url: '/develop',
        templateUrl: 'app/docs/develop.html',
        controller: 'DevelopController',
        controllerAs: 'develop'
      })
      .state('docs.tutorials', {
        url: '/tutorials',
        templateUrl: 'app/docs/tutorials.html',
        controller: 'TutorialsController',
        controllerAs: 'tutorials'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html'
      })
      .state('team.careers', {
        url: '/careers',
        templateUrl: 'app/team/careers.html',
        controller: 'CareersController',
        controllerAs: 'careers'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
