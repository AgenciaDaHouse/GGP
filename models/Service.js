/**
 * dependencies
 */
var keystone = require('keystone')
var Types = keystone.Field.Types

/**
 * model
 */
var Service = new keystone.List('Service', {
  autokey: { from: 'name', path: 'key', unique: true },
  sortable: true
})

Service.add({
  name: { type: String, required: true },
  content: { type: Types.Html, wysiwyg: true },
  extra: { type: Types.Html, wysiwyg: true },
  image: { type: Types.CloudinaryImage }
})

Service.register()
