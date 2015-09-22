/*eslint new-cap:0 camelcase:0*/
'use strict'

/**
 * dependencies
 */
var keystone = require('keystone')

/**
 * public
 */
module.exports = {
  'enquiry-notification': function (req, res, callback) {
    var Enquiry = keystone.list('Enquiry')

    var newEnquiry = new Enquiry.model({
      name: { first: 'Test', last: 'User' },
      email: 'contact@ggp.com',
      phone: '+61 2 1234 5678',
      address: 'Address',
      city: 'City',
      message: { md: 'Nice enquiry notification.' }
    })

    callback(null, {
      admin: 'Admin User',
      enquiry: newEnquiry,
      enquiry_url: '/keystone/enquiries/'
    })
  }
}
