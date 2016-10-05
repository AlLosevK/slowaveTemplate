$(document).ready(function () {
    $('.portfolio-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});

$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


$(document).ready(function () {
    $('.pages-item').on('click', function () {
        $('.pages-item').removeClass('active');
        $(this).addClass('active');
        
        if($('.pages-item-ideas').hasClass("active")){
            $('.pages-descr').fadeOut();
            $('.pages-descr-ideas').fadeIn();
        }
        
        if($('.pages-item-solution').hasClass("active")){
            $('.pages-descr').fadeOut();
            $('.pages-descr-solution').fadeIn();
        }
        
        if($('.pages-item-touch').hasClass("active")){
            $('.pages-descr').fadeOut();
            $('.pages-descr-touch').fadeIn();
        }
        
        if($('.pages-item-winning').hasClass("active")){
            $('.pages-descr').fadeOut();
            $('.pages-descr-winning').fadeIn();
        }
    })
})

