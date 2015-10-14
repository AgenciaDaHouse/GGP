'use strict'

/**
 * definitions
 */
var $window = $(window)
var $header = $('#header')
var $nav = $('#main-nav__nav')
var headerClass = 'c-header--small'
var limit = 20

/**
 * methods
 */
$window.on('scroll', function () {
  if ($window.scrollTop() > limit) {
    $header.addClass(headerClass)
  } else {
    $header.removeClass(headerClass)
  }
})

/**
 * scroll nav
 */
$nav.onePageNav({
  changeHash: true,
  currentClass: 'is-active'
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
