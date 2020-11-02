(function ($) {
  'use strict';
  // open mobile menu
  $('.js-toggle-menu').click(function (e) {
    e.preventDefault();
    $('.mobile-header-nav').slideToggle();
    $(this).toggleClass('open');
  });
  // Testimonial section slick slider
  $('.a3-testi-slider').slick({
    centerMode: true,
    arrows: false,
    dots: true,
    centerPadding: '5px',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

})(jQuery);