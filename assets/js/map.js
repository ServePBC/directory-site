window.loadMap = function() {
  L.mapbox.accessToken = 'pk.eyJ1IjoiY2FibGUzNjM2IiwiYSI6Ijc0Mjk0ZTE5YTY1ZmMwMWJhNWVkMTNmMDcyYjI5MWJiIn0.2wRx10DFsGguR6QPkcUhDQ';
  window.map = L.mapbox.map('map', 'mapbox.streets').setView([26.7153, -80.0534], 11);
  L.mapbox.styleLayer('mapbox://styles/mapbox/light-v9').addTo(map);
  window.map.scrollWheelZoom.disable();
};

$(document).ready(function() {
  window.loadMap();
});
