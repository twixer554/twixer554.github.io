$(document).ready(function() {
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
});