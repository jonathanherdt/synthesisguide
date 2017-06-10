angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.problems', {
    url: '/problems',
    views: {
      'tab4': {
        templateUrl: 'templates/problems.html',
        controller: 'problemsCtrl'
      }
    }
  })

  .state('tabsController.synthesisInTheory', {
    url: '/gettingstarted',
    views: {
      'tab3': {
        templateUrl: 'templates/synthesisInTheory.html',
        controller: 'synthesisInTheoryCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.storytelling', {
    url: '/problems/sharing',
    views: {
      'tab4': {
        templateUrl: 'templates/storytelling.html',
        controller: 'storytellingCtrl'
      }
    }
  })

  .state('tabsController.whatIsSynthesis', {
    url: '/whatIsSynthesis',
    views: {
      'tab3': {
        templateUrl: 'templates/whatIsSynthesis.html',
        controller: 'whatIsSynthesisCtrl'
      }
    }
  })

  .state('tabsController.howIsSynthesisStructured', {
    url: '/howIsSynthesisStructured',
    views: {
      'tab3': {
        templateUrl: 'templates/howIsSynthesisStructured.html',
        controller: 'howIsSynthesisStructuredCtrl'
      }
    }
  })

  .state('tabsController.senseMakingProblems', {
    url: '/sensemakingProblems',
    views: {
      'tab4': {
        templateUrl: 'templates/senseMakingProblems.html',
        controller: 'senseMakingProblemsCtrl'
      }
    }
  })

  .state('tabsController.agreeingProblems', {
    url: '/agreeingProblems',
    views: {
      'tab4': {
        templateUrl: 'templates/agreeingProblems.html',
        controller: 'agreeingProblemsCtrl'
      }
    }
  })

  .state('tabsController.generalProblems', {
    url: '/generalProblems',
    views: {
      'tab4': {
        templateUrl: 'templates/generalProblems.html',
        controller: 'generalProblemsCtrl'
      }
    }
  })

  .state('tabsController.spottingSynthesisProblems', {
    url: '/spottingSynthesisProblems',
    views: {
      'tab4': {
        templateUrl: 'templates/spottingSynthesisProblems.html',
        controller: 'spottingSynthesisProblemsCtrl'
      }
    }
  })

  .state('tabsController.howToCommunicateInATeam', {
    url: '/howToCommunicateInATeam',
    views: {
      'tab3': {
        templateUrl: 'templates/howToCommunicateInATeam.html',
        controller: 'howToCommunicateInATeamCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/gettingstarted')


});