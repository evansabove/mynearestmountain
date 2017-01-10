var mountains = [
	{ id: 1, name: 'Ben Nevis', country: 'Scotland', elevation: 1344, prominence: 1344, grid: 'NN166712', lat:56.796088, lng: -5.004712 },
	{ id: 2, name: 'Carn Eige', country: 'Scotland', elevation: 1183, prominence: 1147, grid: 'NH123261', lat:57.28683, lng: -5.1160039 },
	{ id: 3, name: 'Snowdon - Yr Wyddfa', country: 'Wales', elevation: 1085, prominence: 1038, grid: 'SH609543', lat:53.067777, lng: -4.0774737 },
	{ id: 4, name: 'Sgurr Alasdair', country: 'Scotland', elevation: 992, prominence: 992, grid: 'NG450207', lat:57.205873, lng: -6.2241087 },
	{ id: 5, name: 'Ben More', country: 'Scotland', elevation: 1174, prominence: 986, grid: 'NN432244', lat:56.385789, lng: -4.5413166 },
	{ id: 6, name: 'Ben More', country: 'Scotland', elevation: 966, prominence: 966, grid: 'NM525330', lat:56.424108, lng: -6.0152005 },
	{ id: 7, name: 'Liathach - Spidean a\'Choire Leith', country: 'Scotland', elevation: 1055, prominence: 957, grid: 'NG929579', lat:57.563578, lng: -5.4641195 },
	{ id: 8, name: 'Ben Macdui', country: 'Scotland', elevation: 1309, prominence: 950, grid: 'NN988989', lat:57.069971, lng: -3.6707142 },
	{ id: 9, name: 'Ben Lawers', country: 'Scotland', elevation: 1214, prominence: 915, grid: 'NN635414', lat:56.544702, lng: -4.2217107 },
	{ id: 10, name: 'Sgurr Mor', country: 'Scotland', elevation: 1108, prominence: 913, grid: 'NH203718', lat:57.699984, lng: -5.0171332 },
	{ id: 11, name: 'Scafell Pike', country: 'England', elevation: 978, prominence: 912, grid: 'NY215072', lat:54.454098, lng: -3.2122852 },
	{ id: 12, name: 'Ben Cruachan', country: 'Scotland', elevation: 1126, prominence: 879, grid: 'NN069304', lat:56.42618, lng: -5.1327995 },
	{ id: 13, name: 'Ben Lui', country: 'Scotland', elevation: 1130, prominence: 875, grid: 'NN266263', lat:56.39704, lng: -4.8110989 },
	{ id: 14, name: 'Goatfell', country: 'Scotland', elevation: 874, prominence: 874, grid: 'NR991415', lat:55.625457, lng: -5.1924919 },
	{ id: 15, name: 'Sgurr Dhomhnuill', country: 'Scotland', elevation: 888, prominence: 873, grid: 'NM889678', lat:56.753864, lng: -5.4546074 },
	{ id: 16, name: 'Creag Meagaidh', country: 'Scotland', elevation: 1128, prominence: 867, grid: 'NN418875', lat:56.951617, lng: -4.6027428 },
	{ id: 17, name: 'Bla Bheinn', country: 'Scotland', elevation: 928, prominence: 861, grid: 'NG529217', lat:57.219159, lng: -6.0946748 },
	{ id: 18, name: 'Bidean nam Bian', country: 'Scotland', elevation: 1150, prominence: 845, grid: 'NN143542', lat:56.642669, lng: -5.0300142 },
	{ id: 19, name: 'Gulvain', country: 'Scotland', elevation: 987, prominence: 842, grid: 'NN002875', lat:56.935528, lng: -5.2855839 },
	{ id: 20, name: 'Sgurr na Lapaich', country: 'Scotland', elevation: 1150, prominence: 839, grid: 'NH160351', lat:57.369064, lng: -5.0614259 },
	{ id: 21, name: 'Sgurr na Ciche', country: 'Scotland', elevation: 1040, prominence: 839, grid: 'NM902966', lat:57.012704, lng: -5.4571761 },
	{ id: 22, name: 'Ben More Assynt', country: 'Scotland', elevation: 998, prominence: 835, grid: 'NC318201', lat:58.137726, lng: -4.8586846 },
	{ id: 23, name: 'Ben Vorlich', country: 'Scotland', elevation: 985, prominence: 831, grid: 'NN629189', lat:56.34254, lng: -4.2196495 },
	{ id: 24, name: 'Ben Lomond', country: 'Scotland', elevation: 974, prominence: 820, grid: 'NN367028', lat:56.189734, lng: -4.6331056 },
	{ id: 25, name: 'Sgurr a\'Choire Ghlais', country: 'Scotland', elevation: 1083, prominence: 818, grid: 'NH258430', lat:57.443791, lng: -4.9043119 },
	{ id: 26, name: 'Ben Klibreck - Meall nan Con', country: 'Scotland', elevation: 962, prominence: 818, grid: 'NC585299', lat:58.235022, lng: -4.4116218 },
	{ id: 27, name: 'Askival', country: 'Scotland', elevation: 812, prominence: 812, grid: 'NM393952', lat:56.974245, lng: -6.2916751 },
	{ id: 28, name: 'Beinn Dearg', country: 'Scotland', elevation: 1084, prominence: 810, grid: 'NH259811', lat:57.785613, lng: -4.9300499 },
	{ id: 29, name: 'Clisham', country: 'Scotland', elevation: 799, prominence: 799, grid: 'NB154073', lat:57.963647, lng: -6.8139576 },
	{ id: 30, name: 'Meall a\'Bhuiridh', country: 'Scotland', elevation: 1108, prominence: 795, grid: 'NN250503', lat:56.611799, lng: -4.8531271 },
	{ id: 31, name: 'Ladhar Bheinn', country: 'Scotland', elevation: 1020, prominence: 795, grid: 'NG824039', lat:57.074543, lng: -5.5916851 },
	{ id: 32, name: 'A\'Chralaig', country: 'Scotland', elevation: 1120, prominence: 786, grid: 'NH094148', lat:57.184277, lng: -5.1553615 },
	{ id: 33, name: 'Beinn an Oir', country: 'Scotland', elevation: 785, prominence: 785, grid: 'NR498749', lat:55.901982, lng: -6.0042291 },
	{ id: 34, name: 'Ben Alder', country: 'Scotland', elevation: 1148, prominence: 783, grid: 'NN496718', lat:56.813311, lng: -4.4653344 },
	{ id: 35, name: 'Rois-Bheinn', country: 'Scotland', elevation: 882, prominence: 774, grid: 'NM756778', lat:56.837304, lng: -5.6804483 },
	{ id: 36, name: 'Ben Hope', country: 'Scotland', elevation: 927, prominence: 772, grid: 'NC477501', lat:58.412655, lng: -4.6086743 },
	{ id: 37, name: 'Gleouraich', country: 'Scotland', elevation: 1035, prominence: 765, grid: 'NH039053', lat:57.096756, lng: -5.2387439 },
	{ id: 38, name: 'Binnein Mor', country: 'Scotland', elevation: 1130, prominence: 759, grid: 'NN212663', lat:56.753916, lng: -4.9260759 },
	{ id: 39, name: 'An Teallach - Bidein a\'Ghlas Thuill', country: 'Scotland', elevation: 1062, prominence: 756, grid: 'NH069843', lat:57.806527, lng: -5.2516553 },
	{ id: 40, name: 'Creach Bheinn', country: 'Scotland', elevation: 853, prominence: 755, grid: 'NM870576', lat:56.661536, lng: -5.4771643 },
	{ id: 41, name: 'Carnedd Llewelyn', country: 'Wales', elevation: 1064, prominence: 750, grid: 'SH683643', lat:53.15949, lng: -3.9712109 },
	{ id: 42, name: 'Beinn a\'Bheithir - Sgorr Dhearg', country: 'Scotland', elevation: 1024, prominence: 729, grid: 'NN056558', lat:56.65349, lng: -5.1728596 },
	{ id: 43, name: 'Sgorr Ruadh', country: 'Scotland', elevation: 962, prominence: 727, grid: 'NG959505', lat:57.49859, lng: -5.4078617 },
	{ id: 44, name: 'Schiehallion', country: 'Scotland', elevation: 1083, prominence: 716, grid: 'NN713547', lat:56.666309, lng: -4.10157 },
	{ id: 45, name: 'Sgurr na Coinnich', country: 'Scotland', elevation: 739, prominence: 714, grid: 'NG762222', lat:57.235618, lng: -5.710146 },
	{ id: 46, name: 'Beinn Ime', country: 'Scotland', elevation: 1011, prominence: 712, grid: 'NN254084', lat:56.235976, lng: -4.8186486 },
	{ id: 47, name: 'Helvellyn', country: 'England', elevation: 950, prominence: 712, grid: 'NY342151', lat:54.52689, lng: -3.0182022 },
	{ id: 48, name: 'Skiddaw', country: 'England', elevation: 931, prominence: 709, grid: 'NY260290', lat:54.650648, lng: -3.1483845 },
	{ id: 49, name: 'Sgurr a\'Mhaoraich', country: 'Scotland', elevation: 1027, prominence: 706, grid: 'NG983065', lat:57.105097, lng: -5.331977 },
	{ id: 50, name: 'Merrick', country: 'Scotland', elevation: 843, prominence: 705, grid: 'NX427855', lat:55.1388, lng: -4.4692775 },
	{ id: 51, name: 'Beinn Mhor', country: 'Scotland', elevation: 741, prominence: 696, grid: 'NS107908', lat:56.072448, lng: -5.0429414 },
	{ id: 52, name: 'Beinn na Caillich', country: 'Scotland', elevation: 732, prominence: 696, grid: 'NG601233', lat:57.237324, lng: -5.9772889 },
	{ id: 53, name: 'Doune Hill', country: 'Scotland', elevation: 734, prominence: 695, grid: 'NS290971', lat:56.135879, lng: -4.7533653 },
	{ id: 54, name: 'Canisp', country: 'Scotland', elevation: 847, prominence: 691, grid: 'NC202187', lat:58.120604, lng: -5.0543318 },
	{ id: 55, name: 'Ben Wyvis - Glas Leathad Mor', country: 'Scotland', elevation: 1046, prominence: 691, grid: 'NH462683', lat:57.678186, lng: -4.5808282 },
	{ id: 56, name: 'Foinaven', country: 'Scotland', elevation: 911.05, prominence: 687, grid: 'NC315507', lat:58.412096, lng: -4.8860304 },
	{ id: 57, name: 'Garbh Bheinn', country: 'Scotland', elevation: 885, prominence: 687, grid: 'NM904622', lat:56.704323, lng: -5.4255462 },
	{ id: 58, name: 'Pen y Fan', country: 'Wales', elevation: 886, prominence: 671, grid: 'SO012215', lat:51.883277, lng: -3.4368421 },
	{ id: 59, name: 'The Storr', country: 'Scotland', elevation: 719, prominence: 671, grid: 'NG495540', lat:57.506687, lng: -6.1836842 },
	{ id: 60, name: 'Lochnagar - Cac Carn Beag', country: 'Scotland', elevation: 1155, prominence: 670, grid: 'NO243861', lat:56.959915, lng: -3.2464249 },
	{ id: 61, name: 'Aran Fawddwy', country: 'Wales', elevation: 905, prominence: 670, grid: 'SH862223', lat:52.786239, lng: -3.6888481 },
	{ id: 62, name: 'Sgurr Fhuaran', country: 'Scotland', elevation: 1067, prominence: 663, grid: 'NG978166', lat:57.195452, lng: -5.3483982 },
	{ id: 63, name: 'Beinn Sgulaird', country: 'Scotland', elevation: 937, prominence: 662, grid: 'NN053460', lat:56.565459, lng: -5.1703638 },
	{ id: 64, name: 'Dun da Ghaoithe', country: 'Scotland', elevation: 766, prominence: 659, grid: 'NM672362', lat:56.460272, lng: -5.7802717 },
	{ id: 65, name: 'Fionn Bheinn', country: 'Scotland', elevation: 933, prominence: 658, grid: 'NH147621', lat:57.610712, lng: -5.1035047 },
	{ id: 66, name: 'Beinn a\'Ghlo - Carn nan Gabhar', country: 'Scotland', elevation: 1121, prominence: 657, grid: 'NN971733', lat:56.839723, lng: -3.6883101 },
	{ id: 67, name: 'Ben Mor Coigach', country: 'Scotland', elevation: 743, prominence: 657, grid: 'NC094042', lat:57.986056, lng: -5.225617 },
	{ id: 68, name: 'Broad Law', country: 'Scotland', elevation: 840, prominence: 653, grid: 'NT146235', lat:55.497794, lng: -3.3533793 },
	{ id: 69, name: 'Cul Mor', country: 'Scotland', elevation: 849, prominence: 651, grid: 'NC162119', lat:58.057976, lng: -5.1168018 },
	{ id: 70, name: 'Cross Fell', country: 'England', elevation: 893, prominence: 651, grid: 'NY687343', lat:54.702743, lng: -2.4872261 },
	{ id: 71, name: 'Beinn a\'Chreachain', country: 'Scotland', elevation: 1081, prominence: 650, grid: 'NN373440', lat:56.559693, lng: -4.6489979 },
	{ id: 72, name: 'Chno Dearg', country: 'Scotland', elevation: 1046, prominence: 649, grid: 'NN377741', lat:56.82995, lng: -4.6615039 },
	{ id: 73, name: 'Beinn Fhada', country: 'Scotland', elevation: 1032, prominence: 647, grid: 'NH018192', lat:57.220516, lng: -5.2843886 },
	{ id: 74, name: 'Glyder Fawr', country: 'Wales', elevation: 1000.8, prominence: 645, grid: 'SH642579', lat:53.100966, lng: -4.0297781 },
	{ id: 75, name: 'Ben Chonzie', country: 'Scotland', elevation: 931, prominence: 645, grid: 'NN773308', lat:56.453339, lng: -3.9924244 },
	{ id: 76, name: 'Beinn an Lochain', country: 'Scotland', elevation: 901, prominence: 640, grid: 'NN218079', lat:56.230154, lng: -4.876314 },
	{ id: 77, name: 'Beinn Eighe - Ruadh-stac Mor', country: 'Scotland', elevation: 1010, prominence: 632, grid: 'NG951611', lat:57.593272, lng: -5.4301154 },
	{ id: 78, name: 'Ben Vorlich', country: 'Scotland', elevation: 943, prominence: 632, grid: 'NN295124', lat:56.27336, lng: -4.7551643 },
	{ id: 79, name: 'Slioch', country: 'Scotland', elevation: 981, prominence: 626, grid: 'NH004690', lat:57.666486, lng: -5.3481282 },
	{ id: 80, name: 'Sgurr nan Eugallt', country: 'Scotland', elevation: 898, prominence: 625, grid: 'NG927048', lat:57.087364, lng: -5.4228487 },
	{ id: 81, name: 'Waun Fach', country: 'Wales', elevation: 811, prominence: 622, grid: 'SO215299', lat:51.962017, lng: -3.1438993 },
	{ id: 82, name: 'Sron a\'Choire Ghairbh', country: 'Scotland', elevation: 937, prominence: 622, grid: 'NN222945', lat:57.007301, lng: -4.9294853 },
	{ id: 83, name: 'Aonach Eagach - Sgorr nam Fiannaidh', country: 'Scotland', elevation: 967, prominence: 622, grid: 'NN140583', lat:56.679332, lng: -5.0378588 },
	{ id: 84, name: 'Snaefell', country: 'Isle of Man', elevation: 621, prominence: 621, grid: 'SC397880', lat:54.262471, lng: -4.4626538 },
	{ id: 85, name: 'Beinn Mhor', country: 'Scotland', elevation: 620, prominence: 620, grid: 'NF808310', lat:57.257836, lng: -7.2957684 },
	{ id: 86, name: 'Sgurr Ghiubhsachain', country: 'Scotland', elevation: 849, prominence: 614, grid: 'NM875751', lat:56.818687, lng: -5.4835287 },
	{ id: 87, name: 'Sgurr Thuilm', country: 'Scotland', elevation: 963, prominence: 614, grid: 'NM939879', lat:56.936354, lng: -5.3892554 },
	{ id: 88, name: 'Carn Mor', country: 'Scotland', elevation: 829, prominence: 613, grid: 'NM903909', lat:56.961638, lng: -5.4507946 },
	{ id: 89, name: 'Stob Coire Easain', country: 'Scotland', elevation: 1115, prominence: 611, grid: 'NN308730', lat:56.817619, lng: -4.7737085 },
	{ id: 90, name: 'Ben Loyal - An Caisteal', country: 'Scotland', elevation: 764, prominence: 609, grid: 'NC578488', lat:58.404391, lng: -4.43517 },
	{ id: 91, name: 'Cadair Idris - Penygadair', country: 'Wales', elevation: 893, prominence: 608, grid: 'SH711130', lat:52.699285, lng: -3.9089642 },
	{ id: 92, name: 'Ben Hee', country: 'Scotland', elevation: 873, prominence: 607, grid: 'NC426339', lat:58.265513, lng: -4.6848086 },
	{ id: 93, name: 'Beinn Alligin - Sgurr Mhor', country: 'Scotland', elevation: 986, prominence: 601, grid: 'NG865612', lat:57.590185, lng: -5.5737883 },
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

	        var targetPosition = findNearestMountain(currentPosition);

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

				    createModel(targetPosition.name, result.routes[0].legs[0].distance.text);
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
		var latSquare = Math.pow(mountain.lat - currentPosition.lat, 2);
		var lngSquare = Math.pow(mountain.lng - currentPosition.lng, 2);

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

var createModel = function(nearestMountainName, distance) {
	var model = function() {
		this.nearestMountainName = nearestMountainName;
		this.distance = distance;
	}

	var viewModel = new model();
	ko.applyBindings(viewModel);
}