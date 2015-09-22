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

  view.on('init', function (next) {
    var banners = keystone
      .list('Banner')
      .model
      .find()
      .sort('sortOrder')

    banners.exec(function (err, results) {
      locals.banners = results
      next(err)
    })
  })

  view.render('index')
}
