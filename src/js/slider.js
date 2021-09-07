// $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true
// });

$(document).ready(function () {
  // const prev = $('.feedback__article-button--left');
  // const next = $('.feedback__article-button--right');
  $('.feedback__main-slider').slick({
    // nextArrow: next,
    // prevArrow: prev,
    // appendArrows: $('.feedback-slider'),
    // arrows: false,
    // dots: false,
    // mobileFirst: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // centerMode: true,
    asNavFor: '.feedback__list',

    responsive: [
      {
        breakpoint: 766,
        settings: {
          arrows: true,
        },
      },
    ],
  });
});
