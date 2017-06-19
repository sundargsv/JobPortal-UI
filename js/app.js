'use strict';
var app = angular.module('app',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider)
{
  $urlRouterProvider
            .otherwise('/index.html');
$stateProvider
.state('jobs', {
                 url: '/jobs',
                 templateUrl: 'menu/test.html',
                 controller : 'homeController'

             })
             .state('applyJob', {
                              url: '/applyJobs',
                              templateUrl: 'menu/jobs.html',
                              params: {
                                        item: null,
                                    },
                              controller : 'viewController'

                          })
});
