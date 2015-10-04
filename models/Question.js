/**
 * dependencies
 */
var keystone = require('keystone')
var Types = keystone.Field.Types

/**
 * model
 */
var Question = new keystone.List('Question', {
  autokey: { from: 'name', path: 'key', unique: true },
  sortable: true
})

Question.add({
  name: { type: String, required: true },
  content: { type: Types.Html, wysiwyg: true }
})

Question.register()
