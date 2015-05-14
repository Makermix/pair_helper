makerMix.controller('CohortController', ['$resource', function($resource) {
    var self = this;

    var apiResource = $resource('https://makermix.herokuapp.com/cohorts/1');

    self.cohort = apiResource.get();

}]);
