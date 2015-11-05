var portfolio = angular.module('portfolio', ['ui.router']);

portfolio.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: 'partials/header.html'
      },
      'home-banner': {
        templateUrl: 'partials/home-banner.html',
      },
      'portfolio': {
        templateUrl: 'partials/portfolio.html',
      }

    }
  })
});

// $stateProvider.state('project1', {
//   url: '/project1',
//   views: {
//     'header': {
//     templateUrl: 'partials/header.html'
//     },
//     // 'current-project': {
//     //   templateUrl: 'partials/project1.html',
//     // },
//     'portfolio': {
//       templateUrl: 'partials/portfolio.html',
//     }
//   }
// });
