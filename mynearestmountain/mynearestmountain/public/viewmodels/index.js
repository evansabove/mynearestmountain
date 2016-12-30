function model() {
	
	var mountains = [
		{ name: "Ben Nevis", location: [56, 47, 49, 'N', 5, 0, 13, 'W']},
		{ name: "Scafell Pike", location: [54, 27, 15.2, 'N', 3, 12, 41.5, 'W']},
		{ name: "Snowdon", location: [53, 4, 6.59, 'N', 4, 4, 34.43, 'W']}
	]
	
	this.mountains = mountains.map(function(mountain) { return mountain.name; });
}

ko.applyBindings(new model());