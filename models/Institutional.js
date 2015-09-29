/**
 * dependencies
 */
var keystone = require('keystone')
var Types = keystone.Field.Types

/**
 * model
 */
var Institutional = new keystone.List('Institutional', {
  autokey: { from: 'reference', path: 'reference', unique: true },
  defaultSort: '-index'
})

Institutional.add({
  name: { type: String, required: true },
  reference: { type: Types.Key },
  content: { type: Types.Html, wysiwyg: true },
  image: { type: Types.CloudinaryImage }
})

Institutional.register()
