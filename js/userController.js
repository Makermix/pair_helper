makerMix.controller('UserController', ['$resource', function($resource) {
    var self = this;

    var URL = 'https://makermix.herokuapp.com/pair/';

    self.outputName = function() {
      var apiResource = $resource(URL + self.userName);
      self.userBox = apiResource.get();
    };
}]);