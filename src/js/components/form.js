'use strict'

/**
 * definitions
 */
var $form = $('#form')
var $feedback = $('#form-feedback')
var $submit = $form.find('[type=submit]')
var messages = {
  wait: 'Aguarde, estamos enviando sua mensagem',
  error: 'Desculpe, não pudemos enviá-la. Tente mais tarde',
  success: 'Obrigado! Nós responderemos em breve'
}

/**
 * methods
 */
function showFeedback(status) {
  $feedback
    .stop(true, true)
    .hide()
    .attr('data-status', status)
    .html(messages[status])
    .fadeIn()
    .delay(5000)
    .queue(function (next) {
      $feedback.fadeOut()
      next()
    })
}

$form.on('submit', function (e) {
  e.preventDefault()
  showFeedback('wait')
  $submit.prop('disabled', true)

  var formData = new FormData($form[0])

  $
    .ajax({
      url: $form.attr('action'),
      type: $form.attr('method'),
      cache: false,
      contentType: false,
      processData: false,
      data: formData
    })
    .fail(function () {
      showFeedback('error')
    })
    .done(function () {
      showFeedback('success')
      $form[0].reset()
    })
    .always(function () {
      $submit.prop('disabled', false)
    })
})
