makerMix.controller('ViewController', ['$resource', function($resource) {
    var self = this;
    self.view = 1;

    self.setView = function(selection){
      self.view = selection;
    };

    self.isView = function(selection){
      return self.view === selection;
    };
}]);
