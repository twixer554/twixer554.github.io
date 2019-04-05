$(document).ready(function(){
  $('.slick-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  nextArrow: $('.slick-slider-arrow-next'), 
	  prevArrow: $('.slick-slider-arrow-prev'),
  });
  $("a[href^='#']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top -79 + "px"}, 700);
		return false;
	});
});