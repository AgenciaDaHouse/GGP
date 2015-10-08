/*globals google*/
'use strict'

var directionsService = new google.maps.DirectionsService()

function getDirections(val) {
  var request = {
    origin: val,
    destination: 'Avenida Maringá, 1995 Londrina - Paraná',
    travelMode: google.maps.TravelMode.DRIVING
  }

  directionsService.route(request, function(result, status) {
    if (google.maps.DirectionsStatus.OK && status !== 'ZERO_RESULTS') {
      console.log(result.routes[0].legs[0])
    }
  })
}

$('#location-field').on('blur', function () {
  var val = this.value

  if (val.length < 3) {
    return
  }

  getDirections(val)
})
