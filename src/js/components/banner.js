/*eslint no-unused-vars:0*/
'use strict'

var swiper = new window.Swiper('#intro', {
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  autoplay: 6000,
  loop: true
})

// Smooth Scroll
$('#intro a').on('click', function () {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash)
    if (target.length) {
      $('html, body').animate({ scrollTop: target.offset().top }, 1000);
    }
  }
});
