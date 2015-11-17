'use strict'

/**
 * dependencies
 */
var keystone = require('keystone')
var _ = require('underscore')

/**
 * public
 */
exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res)
  var locals = res.locals

  locals.section = 'home'

  function getModel (name, keyOrCallback, next) {
    return keystone
      .list(name)
      .model
      .find()
      .sort('sortOrder')
      .exec(_.isFunction(keyOrCallback) ? keyOrCallback :
        function (err, results) {
          locals[keyOrCallback] = results
          next(err)
      })
  }

  view.on('init', function (next) {
    getModel('Banner', 'banners', next)
  })

  view.on('init', function (next) {
    getModel('Institutional', function (err, results) {
      locals.institutional = _.indexBy(results, 'reference')
      next(err)
    })
  })

  view.on('init', function (next) {
    getModel('Service', 'services', next)
  })

  view.on('init', function (next) {
    getModel('Client', function (err, results) {
      locals.clients = []

      while (results.length)
        locals.clients.push(results.splice(0, 9))

      next(err)
    })
  })

  view.on('init', function (next) {
    getModel('Question', 'questions', next)
  })

  view.on('init', function (next) {
    getModel('Document', 'documents', next)
  })

  view.render('index')
}
