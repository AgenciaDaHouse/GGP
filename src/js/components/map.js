/*eslint no-unused-vars:0*/
/*globals google*/
'use strict'

function initialize() {
  var ll = new google.maps.LatLng(-23.31959,	-51.17652)
  var mapOptions = {
    zoom: 15,
    center: ll,
    scrollwheel: false
  }

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions)

  var marker = new google.maps.Marker({
    position: ll,
    map: map,
    title: 'GGP'
  })
}

google.maps.event.addDomListener(window, 'load', initialize)
