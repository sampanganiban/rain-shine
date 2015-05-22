window.onload = function () {

  cafeLocation();

  userLocation();

  initialize();

}

var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
var hereIsTheUser;
var hereIsTheCafe;

function cafeLocation() {

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

  // Save the location of the cafe
  hereIsTheCafe = centerPoint;

  var mapOptions = {

    center:centerPoint,
    zoom:17,
    mapTypeControl:false,
    streetViewControl:false
  }

  // Show the map
  map = new google.maps.Map(mapContainer, mapOptions);

  var iconBase = 'img/location-marker.png';
  var cafeMarker = new google.maps.Marker({

    position:centerPoint,
    map:map,
    icon:iconBase,
    title:cafe.title

  });

}

function userLocation() {

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function(userLocation) {

    console.log(userLocation);

    var latLng = new google.maps.LatLng (userLocation.coords.latitude, userLocation.coords.longitude);

    // Save the location of the user
    hereIsTheUser = latLng;

    var userMarker = new google.maps.Marker ({
      position:latLng,
      map: map,
      icon: 'img/location-marker.png'
    });

    userMarker.setAnimation(google.maps.Animation.DROP);

    map.panTo(latLng);

     calcRoute();

    });

  }

}

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
 directionsDisplay.setMap(map);
}



function calcRoute() {
  var request = {
      origin: hereIsTheUser,
      destination: hereIsTheCafe,
      travelMode: google.maps.TravelMode.WALKING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}















