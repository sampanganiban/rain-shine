// Allow everything to download first before running code

window.onload = function () {

	// Show the map
	cafeMap();

}

function cafeMap() {

	// Find the map container
	var mapContainer = document.getElementById('cafe-location');

	// Store the info about the cafe in a JS object
	var cafe = {

		title:"Rain & Shine Cafe",
		lat:-41.284933, 
		lng:174.779289,
		icon: ''

	}

	// Give the lat and lng to google so it can center on that info
	var centerPoint = new google.maps.LatLng(cafe.lat, cafe.lng);

	var mapOptions = {

		center:centerPoint,
		zoom:15,
		mapTypeControl:false,
		streetViewControl:false
	}

	// Show the map
	var theMap = new google.maps.Map(mapContainer, mapOptions);

	var iconBase = 'img/rain-shine-logo.gif';
	var cafeMarker = new google.maps.Marker({

		position:centerPoint,
		map:theMap,
		icon:iconBase,
		title:cafe.title

	});


}