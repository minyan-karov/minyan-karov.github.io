angular.
  module('zmanim').
  component('zmanim', {
        templateUrl : "zmanim/zmanim.htm",
        controller : function ($http) {
          var today = new Date();
          var dd = today.getDate();
          var mm = today.getMonth()+1; //January is 0!
          var yyyy = today.getFullYear();
          this.zmanim = new Zmanim(dd, mm, yyyy);
          
          var self = this;

          $http.get("config.json").then(
            function(response) {
              self.data = response.data;
            }
          );
        }
  })
        