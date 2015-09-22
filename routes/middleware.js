'use strict'

/**
 * locals
 */
exports.initLocals = function (req, res, next) {
  var locals = res.locals

  locals.mainNav = [
    { label: 'Home', url: '/#intro' },
    { label: 'Empresa', url: '/#empresa' },
    { label: 'Serviços', url: '/#servicos' },
    { label: 'Documentos', url: '/#documentos', modal: true },
    { label: 'Dúvidas', url: '/#duvidas' },
    { label: 'Contato', url: '/#contato' },
    { label: 'Pesquisa Marca', url: '/#pesquisa-marca' }
  ]

  locals.socialNav = [
    { label: 'Facebook', icon: 'facebook', url: 'https://fb.com/ggp' },
    { label: 'Skype', icon: 'skype', url: 'https://skype.com/ggp' },
    { label: 'Instagram', icon: 'instagram', url: 'https://instagram.com/ggp' }
  ]

  locals.email = 'contato@ggp.com.br'
  locals.user = req.user
  next()
}

/**
  Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
  if (!req.user) {
    req.flash('error', 'Please sign in to access this page.')
    res.redirect('/keystone/signin')
  } else {
    next()
  }
}
