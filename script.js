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

$(document).ready(function(){
    $('#musicCarousel').carousel({
        interval: 1000 // You can change this value to adjust the carousel's auto-slide interval
    });

    // Ensure the carousel controls work
    $(".left.carousel-control").click(function(){
        $("#musicCarousel").carousel('prev');
    });
    $(".right.carousel-control").click(function(){
        $("#musicCarousel").carousel('next');
    });
});