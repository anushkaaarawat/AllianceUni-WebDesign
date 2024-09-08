$(document).ready(function() {
    // Smooth scrolling
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Toggle mobile menu
    $('.toggle-menu').on('click', function() {
        $('.nav-menu').slideToggle();
    });
});
