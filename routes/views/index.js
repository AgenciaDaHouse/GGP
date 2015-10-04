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

  function getModel (name, callback) {
    return keystone
      .list(name)
      .model
      .find()
      .sort('sortOrder')
      .exec(callback)
  }

  view.on('init', function (next) {
    getModel('Banner', function (err, results) {
      locals.banners = _.sortBy(results, 'index')
      next(err)
    })
  })

  view.on('init', function (next) {
    getModel('Institutional', function (err, results) {
      locals.institutional = _.indexBy(results, 'reference')
      next(err)
    })
  })

  view.on('init', function (next) {
    getModel('Service', function (err, results) {
      locals.services = results
      next(err)
    })
  })

  view.on('init', function (next) {
    getModel('Client', function (err, results) {
      locals.clients = results
      next(err)
    })
  })

  view.on('init', function (next) {
    getModel('Question', function (err, results) {
      locals.questions = results
      next(err)
    })
  })

  view.render('index')
}
