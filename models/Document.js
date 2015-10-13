/**
 * dependencies
 */
var keystone = require('keystone')
var Types = keystone.Field.Types

/**
 * model
 */
var Document = new keystone.List('Document', {
  autokey: { from: 'name', path: 'key', unique: true },
  sortable: true
})

Document.add({
  name: { type: String, required: true },
  content: { type: Types.Html, wysiwyg: true }
})

Document.register()
