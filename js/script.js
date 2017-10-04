$(document).ready(function () {
    $('.portfolio-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});

$(document).ready(function () {
    $('.portfolio-slider-xs').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

$(function () {
    var CountUpFlag = 0;
    var $window = $(window);
    $window.on('load scroll', function () {
        if ($(this).scrollTop() >= 509 && CountUpFlag == 0) {
            CountUp();
            CountUpFlag = 1;
        }
    });
    function CountUp() {
        $('#top').show();
    }
});

/* Smooth Scroll */

$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1200);
                $('#top').hide();
                return false;
            }
        }
    });
});

$(document).ready(function () {
    $('.pages-item').on('click', function () {
        $('.pages-item').removeClass('active');
        $(this).addClass('active');

        if ($('.pages-item-ideas').hasClass("active")) {
            $('.pages-descr').fadeOut(0);
            $('.pages-descr-ideas').fadeIn(10);
        }

        if ($('.pages-item-solution').hasClass("active")) {
            $('.pages-descr').fadeOut(0);
            $('.pages-descr-solution').fadeIn();
        }

        if ($('.pages-item-touch').hasClass("active")) {
            $('.pages-descr').fadeOut(0);
            $('.pages-descr-touch').fadeIn();
        }

        if ($('.pages-item-winning').hasClass("active")) {
            $('.pages-descr').fadeOut(0);
            $('.pages-descr-winning').fadeIn();
        }
    })
})