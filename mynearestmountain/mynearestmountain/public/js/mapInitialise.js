function initMap() {
	var benNevis = {lat: 56.796944, lng: -5.003611};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 11,
	  center: benNevis
	});
	var marker = new google.maps.Marker({
	  position: benNevis,
	  map: map
	});
}