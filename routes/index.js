'use strict'

/**
 * dependencies
 */
var keystone = require('keystone')
var middleware = require('./middleware')
var importRoutes = keystone.importer(__dirname)

// Common Middlewares
keystone.pre('routes', middleware.initLocals)

// Import Route Controllers
var routes = {
  views: importRoutes('./views')
}

// Setup Route Bindings
exports = module.exports = function (app) {
  app.get('/', routes.views.index)
  app.post('/contact', routes.views.contact)
}
