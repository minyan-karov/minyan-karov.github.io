angular.
  module('senagogMap').
  component('senagogMap', {
        templateUrl : "senagog-map/senagog-map.htm",
        controller : function ($http) {
            
            var self = this;
            
            //Tel Aviv - 32.086718, 34.789760
            var telAviv = {lat: 32.086718, lng: 34.789760};
            
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 9,
                center: telAviv
            });

            $http.get("https://script.google.com/macros/s/AKfycbxWJgCP0uIg5AgVxORyPWbZw4p7IJotc1aIcIdNFFqjmzIpUog/exec?fun=getSenagogs").then(
                function(response) {
                    drowSenagogs(response.data, map);
                }
            );
        }
    });

    /**
     * The function is drowing the map with the senagog array.
     * 
     * @param {*} senagogs 
     * @param {*} map 
     */
    function drowSenagogs(senagogs, map){
        console.log(senagogs);
        senagogs.forEach(function (senagog)
        {
            var coordinate = senagog.coordinate.split(",");
            var coordinateForMap = {lat: Number(coordinate[0]), lng: Number(coordinate[1])};

            var marker = new google.maps.Marker({
                position: coordinateForMap,
                map: map,
                title: senagog.senagogName
            });


            var contentString = retrieveInfowindowContentString(senagog);

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });




            console.log(senagog.coordinate.split(","));
            console.log(coordinateForMap);
        });
    }

    /**
     * The method retrieve the Infowindow contentString for the google.maps.InfoWindow.
     * 
     * @param {Array} senagog 
     * @returns contentString 
     */
    function retrieveInfowindowContentString(senagog) {
        var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">'+ senagog.senagogName +'</h1>'+
        '<div id="bodyContent">'+
        '<p>' +
            
        '</p>'+
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';

        return contentString;
    }