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
      .state('overview', {
        url: '/overview',
        templateUrl: 'app/main/overview.html',
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
      .state('team.node', {
        url: '/node',
        templateUrl: 'app/team/node.html',
        controller: 'NodeController',
        controllerAs: 'node'
      })
      .state('team.chairs', {
        url: '/chairs',
        templateUrl: 'app/team/chairs.html',
        controller: 'ChairsController',
        controllerAs: 'chairs'
      })
      .state('team.info', {
        url: '/info',
        templateUrl: 'app/team/info.html',
        controller: 'InfoController',
        controllerAs: 'info'
      })
      .state('team.members', {
        url: '/members',
        templateUrl: 'app/team/partners.html',
        controller: 'PartnersController',
        controllerAs: 'partner'
      })
      .state('team.coordinator', {
        url: '/partners',
        templateUrl: 'app/team/coordinator.html',
        controller: 'CoordinatorController',
        controllerAs: 'coordinator'
      })
      .state('dev', {
        url: '/dev',
        templateUrl: 'app/dev/dev.html',
        controller: 'DevController',
        controllerAs: 'dev',
      })
      .state('dev.objective', {
        url: '/objective',
        templateUrl: 'app/dev/mission.html',
        controller: 'MissionController',
        controllerAs: 'mission'
      })
      .state('dev.deployment', {
        url: '/deployment',
        templateUrl: 'app/dev/deployment.html',
        controller: 'DeploymentController',
        controllerAs: 'deployment'
      })
      .state('dev.network', {
        url: '/network',
        templateUrl: 'app/dev/network.html',
        // controller: 'NetworkController',
        // controllerAs: 'network'
      })
      .state('dev.tech', {
        url: '/tech',
        templateUrl: 'app/dev/tech.html',
        //controller: 'TechController',
        //controllerAs: 'tech'
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
      .state('faq', {
        url: '/FAQ',
        templateUrl: 'app/help/FAQ.html',
        controller: 'FAQController',
        controllerAs: 'faq'
      })
      .state('info', {
        url: '/info',
        templateUrl: 'app/info/event.html',
        controller: 'EventController',
        controllerAs: 'event'
      })
    $urlRouterProvider.otherwise('/');
  }

})();
