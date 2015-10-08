/*globals google*/
'use strict'

var directionsService = new google.maps.DirectionsService()

function render(route) {
  $('#location-route').addClass('show').html(route)
}

function processRoute(routes) {
  var markup = [ '<ol>' ]

  routes.steps.forEach(function (step) {
    markup.push('<li>' + step.instructions + '</li>')
  })

  markup.push('</ol>')
  return markup.join('')
}

function getDirections(origin) {
  var request = {
    destination: 'Avenida Maringá, 1995 Londrina - Paraná',
    origin: origin,
    travelMode: google.maps.TravelMode.DRIVING
  }

  directionsService.route(request, function (result, status) {
    render(google.maps.DirectionsStatus.OK && status !== 'ZERO_RESULTS'
      ? processRoute(result.routes[0].legs[0])
      : 'Nenhuma rota encontrada'
    )
  })
}

$('#location-field').on('blur', function () {
  getDirections(this.value)
})
