makerMix.controller('UserController', ['$resource', '$http', function($resource, $http) {
    var self = this;

    var URL = 'https://makermix.herokuapp.com/pair/';
    self.hidden = true;
    self.errorHidden = true;

    self.outputName = function() {
      self.userName = capitalizeFirstLetter(self.userName)
      var apiResource = $resource(URL + self.userName);
      $http.get(URL + self.userName).
        success(function(data, status, headers, config) {
          // console.log(data.name)
          self.hidden = false;
          self.errorHidden = true;
        }).
        error(function(data, status, headers, config){
          // console.log('ERROR OR SOMETHING')
          self.hidden = true;
          self.errorHidden = false;
        });


      self.userBox = apiResource.get();
    };

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

}]);
