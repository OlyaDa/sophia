
$(document).ready(function(){
    var burger          = $('.burger'),
        mobileMenu      = $('.mobile-menu'),
        opacity         = $('.opac'),
        body            = $('body');

    $('body').delegate('.burger, .opac','click',  function(){
        burger.toggleClass('burger-active');
        mobileMenu.toggleClass('show');
        opacity.toggleClass('active');
        body.toggleClass('no-scroll');
    });

    $('.owl-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        autoplayHoverPause: true,
        nav:false,
    });

});

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("scroll").style.display = "block";
    } else {
        document.getElementById("scroll").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {scrollFunction()};