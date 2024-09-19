$(document).ready(function() {
    $('nav ul li a').smoothScroll();

    $('.dropbtn').on('click', function() {
        $(this).next('.dropdown-content').toggle();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.dropdown').length) {
            $('.dropdown-content').hide();
        }
    });
});