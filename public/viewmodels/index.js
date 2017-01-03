var mountains = [
	{ id: 1, name: "Ben Nevis", location: {lat: 56.796944, lng: -5.003611}},
	{ id: 2, name: "Scafell Pike", location: {lat: 54.454222, lng: -3.211528}},
	{ id: 3, name: "Snowdon", location: {lat: 53.068497, lng: -4.076231}}
];
	
var initMap = function(destinationLocation) {
	var map = new google.maps.Map(document.getElementById('map'));

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
    	navigator.geolocation.getCurrentPosition(function(position) {
	        var currentPosition = {
	          lat: position.coords.latitude,
	          lng: position.coords.longitude
	        };

	        var targetPosition = findNearestMountain(currentPosition).location;

	        var directionsService = new google.maps.DirectionsService();
	        var directionsDisplay = new google.maps.DirectionsRenderer();
	        directionsDisplay.setMap(map);

	        directionsService.route({
	        	origin: currentPosition,
			    destination: targetPosition,
			    travelMode: 'DRIVING'
	        }, function(result, status) {
				if (status == 'OK') {
				    directionsDisplay.setDirections(result);
				}
	        });
      	}, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
  }

}

var findNearestMountain = function(currentPosition) {
	
	var distances = mountains.map(function(mountain) {
		var latSquare = Math.pow(mountain.location.lat - currentPosition.lat, 2);
		var lngSquare = Math.pow(mountain.location.lng - currentPosition.lng, 2);

		var distance = Math.sqrt(latSquare + lngSquare);

		return { 
			mountain: mountain, 
			distance: distance 
		}
	});

	var sortedDistances = distances.sort(function(a, b) { 
		if(a.distance < b.distance) 
			return -1;
		if(a.distance > b.distance)
			return 1;
		return 0;
	});

	return sortedDistances[0].mountain;
}

var model = function() {}

var viewModel = new model();
ko.applyBindings(viewModel);