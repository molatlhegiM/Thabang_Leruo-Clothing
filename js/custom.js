// === FIX: Prevent dropdown from closing on click inside ===
$(document).on('click', '.dropdown-menu', function (e) {
  e.stopPropagation();
});

(function ($) {
  "use strict";

  // === COLLAPSE NAVBAR ON LINK CLICK ===
  $('.navbar-collapse a').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });

  // === STICKY NAVBAR ===
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
  });

  // === HERO VEGAS SLIDER ===
  $('.hero-slides').vegas({
    slides: [
      { src: 'images/slides/sincere-laugh-showing-picture-smartphone-casual-meeting-with-best-friends-restaurant-terrace.jpg' },
      { src: 'images/happy-waitress-giving-coffee-customers-while-serving-them-coffee-shop.jpg' },
      { src: 'images/young-female-barista-wear-face-mask-serving-take-away-hot-coffee-paper-cup-consumer-cafe.jpg' }
    ],
    transition: 'fade',
    animation: 'kenburns',
    delay: 5000
  });

  // === SMOOTH SCROLL ===
  $('.smoothscroll').click(function () {
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 60;

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $('body,html').animate({
        scrollTop: totalScroll
      }, 300);
    }
  });

  // === WOW INIT (ANIMATIONS) ===
  new WOW().init();

  // === OWL CAROUSEL INIT ===
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  });

  // === COUNTER UP INIT ===
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

})(window.jQuery);
