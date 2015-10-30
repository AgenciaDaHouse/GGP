'use strict'

/**
 * definitions
 */
var $nav = $('#main-nav__nav')

/**
 * scroll nav
 */
$nav.onePageNav({
  changeHash: true,
  currentClass: 'is-active',
  filter: ':not([data-modal])'
})

/**
 * documents
 */
$nav.find('a[data-modal]').magnificPopup({
  preloader: false,
  type: 'inline'
})

/**
 * responsive nav
 */
$('#main-nav__select').on('change', function () {
  $nav.find('[href="' + this.value + '"]').click()
  $(this).prop('selectedIndex', 0)
})
