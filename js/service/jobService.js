//--Start JobFactory--//
/**
 * @author Sundar GSV
 * created on 19.06.2017
 */

 'use strict';
 app.factory('JobService', ['$http', '$q', function($http, $q){

       var REST_SERVICE_URI = 'http://localhost:8080/EMP';
      var factory = {
              fetchAllJobs: fetchAllJobs

       };

             return factory;

             function fetchAllJobs() {
                 console.log("fetchAllJobs called ");
                 var deferred = $q.defer();
                 $http.get(REST_SERVICE_URI + '/openJobs')
                     .then(
                     function (response) {
                          console.log(response.data);
                         deferred.resolve(response.data);


                     },
                     function(errResponse){
                         console.error('Error while fetching Job List');
                         deferred.reject(errResponse);
                     }
                 );
                 return deferred.promise;
             }


 }]);

 //--End JobFactory--//
