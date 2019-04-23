$(document).ready(function() {
	$(function () {
		$("a[data-target^='anchor']").click(function () {
			var _href = $(this).attr("href");
			$("html, body").animate({ scrollTop: $(_href).offset().top -50 + "px"}, 700);
			return false;
		});
	});
	$( '.offer-device-pods').hover(
		function(){
	   		$( '.offer-card_pods').fadeIn('slow');
	    },
	    function(){
	    	$( '.offer-card_pods').fadeOut('slow');
	});
	$( '.offer-device-liquids').hover(
		function(){
	    	$( '.offer-card_liquids').fadeIn('slow');
	    },
	    function(){
	    	$( '.offer-card_liquids').fadeOut('slow');
	});
	$('.devices-slider').slick({
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
	  	nextArrow: $('.devices-slider-arrow-next'), 
	  	prevArrow: $('.devices-slider-arrow-prev')
	});
	$('.comments-slider').slick({
		dots: true,
	  	nextArrow: $('.comments-slider-arrow-next'), 
	  	prevArrow: $('.comments-slider-arrow-prev')
	});
});
