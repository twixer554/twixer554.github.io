$(document).ready(function(){
  $('.slick-slider').slick({
  	arrows: true,
  	nextArrow: $('.slick-slider-arrow-next'), 
  	prevArrow: $('.slick-slider-arrow-prev'),

  	responsive: [
    {
      breakpoint: 780,
      settings: {
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});