angular.
  module('sideNav').
  component('sideNav', {
        templateUrl : "side-nav/side-nav.htm",
        controller : function ($http) {
            
            var self = this;
            
            $http.get("config.json").then(
                function(response) {
                    self.data = response.data;
                }
            );
        }
    });


    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }
    
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }