/*eslint camelcase: [2, {properties: "never"}]*/
'use strict'

/**
 * dependencies
 */
require('dotenv').load()
var keystone = require('keystone')
var config = require('./config')

/**
 * settings
 */
keystone.init({
  'name': config.APP_NAME,
  'brand': config.APP_NAME,
  'port': process.env.PORT || config.APP_PORT,

  'static': 'public',
  'favicon': 'public/favicon.ico',
  'views': 'templates/views',
  'view engine': 'jade',

  'emails': 'templates/emails',

  'auto update': true,
  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': 'mfT!Q*|V]9]RXB<Ty}h]{<7B@5{]t0>$l`1w$HG2]K{B|sAS(86[ug8bb%5:kGEJ',

  'mongo': process.env.MONGOLAB_URI || 'mongodb://localhost/ggp'
})

// Models
keystone.import('models')

// Locals
keystone.set('locals', {
  _: require('underscore'),
  config: config,
  env: keystone.get('env'),
  utils: keystone.utils,
  editable: keystone.content.editable
})

// Routes
keystone.set('routes', require('./routes'))

// Email locals
keystone.set('email locals', {
  logo_src: '/img/logo-email.png',
  logo_width: 230,
  logo_height: 85,
  theme: {
    email_bg: '#fff',
    link_color: '#052746',
    buttons: {
      color: '#fff',
      background_color: '#052746',
      border_color: '#ccc'
    }
  }
})

// Email rules
keystone.set('email rules', [{
  find: '/img/',
  replace: (keystone.get('env') === 'production') ? 'http://ggpmarcas.com.br/img/' : 'http://localhost:3000/img/'
}, {
  find: '/keystone/',
  replace: (keystone.get('env') === 'production') ? 'http://ggpmarcas.com.br/keystone/' : 'http://localhost:3000/keystone/'
}])

// Email tests
keystone.set('email tests', require('./routes/emails'))

// Admin nav config
keystone.set('nav', {
  'users': 'users'
})

// Start Keystone
keystone.start()
