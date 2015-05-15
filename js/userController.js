makerMix.controller('UserController', ['$resource', function($resource) {
    var self = this;

    var URL = 'https://makermix.herokuapp.com/pair/';
    self.hidden = true

    self.outputName = function() {
      self.userName = capitalizeFirstLetter(self.userName)
      var apiResource = $resource(URL + self.userName);
      self.userBox = apiResource.get();
      self.hidden = false;
    };

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

}]);