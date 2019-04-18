$(document).ready(function() {
	// $(function () {
	// 	$("a[data-target^='anchor']").click(function () {
	// 		var _href = $(this).attr("href");
	// 		$("html, body").animate({ scrollTop: $(_href).offset().top -0 + "px"}, 700);
	// 		return false;
	// 	});
	// });
	$('.devices-slider').slick({
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
	});
});
