var map;
var position = new google.maps.LatLng(49.991409, 36.232417);

function initialize() {
  var mapOptions = {
    zoom: 8,
    center: position
  };
  map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);
