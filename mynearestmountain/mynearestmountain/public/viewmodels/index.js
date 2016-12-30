var mountains = [
	{ name: "Ben Nevis", location: {lat: 56.796944, lng: -5.003611}},
	{ name: "Scafell Pike", location: {lat: 54.454222, lng: -3.211528}},
	{ name: "Snowdon", location: {lat: 53.068497, lng: -4.076231}}
];
	
var initMap = function() {
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 11,
	  center: mountains[1].location
	});
	var marker = new google.maps.Marker({
	  position: mountains[1].location,
	  map: map
	});
}

function model() {
	this.mountains = mountains.map(function(mountain) { return mountain.name; });
}

ko.applyBindings(new model());