'use strict';

app.controller('homeController', HomeController);
app.controller('viewController', ViewController);


function HomeController($scope, JobService) {
  console.log('homeController');
   $scope.header = "View Jobs";
   $scope.jobs = {};
   JobService.fetchAllJobs().then(function (result) {
      $scope.jobs = result;

      // $scope.isLoading = false;
    });
  };


  function ViewController($scope, $rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
    console.log('ViewController');
     $scope.header = "Apply Job";
     $scope.job = {};
     $scope.job.skills = {};
     $scope.isApplied = false;
     $scope.job = $rootScope.$stateParams.item;
     console.log($scope.job.id);
    //  JobService.fetchAllJobs().then(function (result) {
    //     $scope.jobs = result;
    //     console.log(result);
    //     // $scope.isLoading = false;
    //   });
    $scope.apply = function apply(){
      alert("Hola, You have applied to this job !!!");
      $scope.isApplied = true;
    }
    };
