$(function () {
	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top -79 + "px"}, 700);
		return false;
	});
	$("#video__play").click(function () {
		var dataYoutube = $(this).parents('.js-video').attr('data-youtube');
		$(this).parents('.js-video').html('<iframe width="100%" height="350" src="https://www.youtube.com/embed/'+ dataYoutube +'?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
	});
	lightbox.option({
      'resizeDuration': 0,
      'wrapAround': true,
      'fadeDuration': 0,
      'imageFadeDuration': 0,
      'positionFromTop': 150
    });
    $('.main-title__btn').magnificPopup({
	  type: 'inline'
	  // other options
	});
	$('.navbar__burger').click(function () {
		$('.navbar__wrapper').slideToggle();
	});
	$('.navbar__burger').click(function () {
		$('.navbar__burger-item').css({ "transform": "rotate(180deg)", 
									"transition": "all 1s"})
	});
});
