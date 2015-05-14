makerMix.controller('CohortController', ['$resource', function($resource) {
    var self = this;
    // var apiResource = $resource('http://localhost:9393');

    // self.cohort = apiResource.get();
    // console.log(self.cohort)

    self.cohort = [
        {"id": 1,
        individuals : [
            {
            "name": "James"
            },
            {
            "name": "Rich"
            }
        ]}
    ];

}]);
