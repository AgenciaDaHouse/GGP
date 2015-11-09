'use strict'

/**
 * locals
 */
exports.initLocals = function (req, res, next) {
  var locals = res.locals

  locals.mainNav = [
    { label: 'Home', url: '#intro' },
    { label: 'Empresa', url: '#empresa' },
    { label: 'Serviços', url: '#servicos' },
    { label: 'Clientes', url: '#clientes' },
    { label: 'Dúvidas', url: '#duvidas' },
    { label: 'Documentos', url: '#documentos', modal: true },
    { label: 'Contato / Pesquisa Marca', url: '#contato' }
  ]

  locals.socialNav = [
    { label: 'Facebook', icon: 'facebook', url: 'https://fb.com/ggpmarcas' }
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
