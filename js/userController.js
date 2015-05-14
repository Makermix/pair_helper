makerMix.controller('UserController', ['$resource', function($resource) {
    var self = this;

    self.outputName = function() {
      self.userBox = self.userName
      console.log(self.userName);
    };
}]);