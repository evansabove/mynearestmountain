var mountains = [
	{ id: 1, name: "Ben Nevis", location: {lat: 56.796944, lng: -5.003611}},
	{ id: 2, name: "Scafell Pike", location: {lat: 54.454222, lng: -3.211528}},
	{ id: 3, name: "Snowdon", location: {lat: 53.068497, lng: -4.076231}}
];
	
var initMap = function(location) {
	if(!google)
		return;
	
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 11,
	  center: location
	});
	var marker = new google.maps.Marker({
	  position: location,
	  map: map
	});
}

var model = function() {
	this.mountains = ko.observableArray(mountains);

	this.selectedMountain = ko.observable();
	this.selectedMountain.subscribe(function(val) {
		var mountain = mountains.filter(function(x) { return x.id === val; })[0];
		initMap(mountain.location);
	});
}

var viewModel = new model();
ko.applyBindings(viewModel);