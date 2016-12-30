//You have degrees, minutes, and seconds (-73° 59’ 14.64") instead of decimal degrees (-73.9874°) 
//The whole units of degrees will remain the same 
//Divide the seconds by 60 (14.64/60 = 0.244) 
//Sum the resulting to the minute and divide by 60 (59.244/60 = 0.9874) 
//The resulting is the decimal value of degrees (0.9874)
//Sum the degrees to the decimal using the symbols for degrees (°) (-73.9874°)

var initMap = function() {
	var benNevis = {lat: 53.068497, lng: -4.076231};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 11,
	  center: benNevis
	});
	var marker = new google.maps.Marker({
	  position: benNevis,
	  map: map
	});
}