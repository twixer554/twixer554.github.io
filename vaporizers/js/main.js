$(document).ready(function() {
	$(function () {
		$("a[data-target^='anchor']").click(function () {
			var _href = $(this).attr("href");
			$("html, body").animate({ scrollTop: $(_href).offset().top -0 + "px"}, 700);
			return false;
		});
	});
	$('.services__wrap').magnificPopup({
		delegate: 'a',
		type: 'inline',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
		},
	}); 
	$('.confidentiality').magnificPopup({
		type:'inline',
		midClick: true
	});
	$('.navbar__burger').click(function () {
		$('.navbar__nav').slideToggle();
	});
	var w = $(window).width(); 
    if (w <= 960) { 
    	$('.target-link').click(function () {
			$('.navbar__nav').slideToggle();
			$('.navbar__hidden').trigger('click'); 
	    	return false;
    	});
	}
	var wow = new WOW(
    	{
        	mobile: false
    	}
    );
    wow.init();
	$(function(){
	'use strict';
		$('#mail-form').on('submit', function(e){
			e.preventDefault();
			var fd = new FormData( this );
			$.ajax({
				url: 'send.php',
				type: 'POST',
				contentType: false, 
				processData: false, 
				data: fd,
				success: function(msg){
					if(msg == 'ok') {
						Swal.fire({
							type: 'success',
							title: 'Наш менеджер свяжется с Вами в ближайшее время',
							showConfirmButton: false,
							timer: 3000
					})
					} else {
				 		Swal.fire({
							type: 'error',
							title: 'Извините, что-то пошло не так',
							text: 'Попробуйте еще раз',
							timer: 3000
						})
					}
			 	}
			 });
		});
	});
});
