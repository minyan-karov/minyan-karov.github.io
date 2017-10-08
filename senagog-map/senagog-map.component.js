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
                    self.senagogs = response.data;
                    drowSenagogs(response.data, map)
                }
            );


        }

    });

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


            var contentString = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">'+ senagog.senagogName +'</h1>'+
                '<div id="bodyContent">'+
                '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
                'sandstone rock formation in the southern part of the '+
                'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
                'south west of the nearest large town, Alice Springs; 450&#160;km '+
                '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
                'features of the Uluru - Kata Tjuta National Park. Uluru is '+
                'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
                'Aboriginal people of the area. It has many springs, waterholes, '+
                'rock caves and ancient paintings. Uluru is listed as a World '+
                'Heritage Site.</p>'+
                '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
                'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
                '(last visited June 22, 2009).</p>'+
                '</div>'+
                '</div>';

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