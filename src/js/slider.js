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
    // infinite:true,
    asNavFor: '.feedback__list',
    autoplay: true,
    autoplaySpeed: 1500,
    // easing: cubic-bezier(0.4, 0, 0.2, 1),

    responsive: [
      {
        breakpoint: 766,
        settings: {
          arrows: true,
        },
      },
    ],
  });

  $('.feedback__list').slick({
    // nextArrow: next,
    // prevArrow: prev,
    // appendArrows: $('.feedback-slider'),
    arrows: false,
    // dots: false,
    // mobileFirst: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // centerMode: true,
    // centerMode: true,
    // focusOnSelect: true,
    asNavFor: '.feedback__main-slider',
    // autoplay: true,
    // autoplaySpeed: 1500,
    infinite:true,
    slidesToShow: 6,
    // easing: cubic-bezier(0.4, 0, 0.2, 1),
    // centerMode: true,
    focusOnSelect: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});
