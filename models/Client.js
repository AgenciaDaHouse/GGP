/**
 * dependencies
 */
var keystone = require('keystone')
var Types = keystone.Field.Types

/**
 * model
 */
var Client = new keystone.List('Client', {
  autokey: { from: 'name', path: 'key', unique: true },
  sortable: true
})

Client.add({
  name: { type: String, required: true },
  image: { type: Types.CloudinaryImage }
})

Client.register()
