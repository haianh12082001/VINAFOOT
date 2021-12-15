AOS.init();
$(document).ready(function () {
    $('.photo-library .list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        speed: 2000,
        autoplaySpeed: 3000,
        asNavFor: '.photo-library .nav-list',
        prevArrow: ('<div class="slick-prev"><i class="fas fa-chevron-left"></i></div>'),
        nextArrow: ('<div class="slick-next"><i class="fas fa-chevron-right"></i></div>'),
    });
    $('.photo-library .nav-list').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.photo-library .list',
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 3000,
        focusOnSelect: true,
        pauseOnHover: true,

        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 3000,
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 3000,
                }
            },
        ]
    });

    //// FEEDBACK
    $(".feedback-list").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        prevArrow: ('<div class="slick-prev"><i class="fas fa-chevron-left"></i></div>'),
        nextArrow: ('<div class="slick-next"><i class="fas fa-chevron-right"></i></div>'),
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 3000,
                }
            },
            {
                breakpoint: 481,
                settings: {

                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 3000,
                }
            },
        ]
    });


    /// PRODUCT-DETAIL
    $('.product-detail .slides').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        speed: 2000,
        autoplaySpeed: 3000,
        asNavFor: '.product-detail .slides-nav',
        prevArrow: ('<div class="slick-prev"><i class="fas fa-chevron-left"></i></div>'),
        nextArrow: ('<div class="slick-next"><i class="fas fa-chevron-right"></i></div>'),
    });
    $('.product-detail .slides-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-detail .slides',
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 3000,
        focusOnSelect: true,
        pauseOnHover: true,
    });
    ////SHOW-MENU-MOBI
    $(".menu-bar").click(function () {
        $('.menu').toggleClass('active');
        $('.menu-bar').toggleClass('fa-times');
        $('.opacity__menu').toggleClass('active');
    })

    $(".opacity__menu").click(function () {
        $('.opacity__menu').removeClass('active');
        $('.menu').removeClass('active');
        $('.menu-bar').removeClass('fa-times');
    })

    ////
    $(".americas-mobi").click(function () {
        $('.language-mobi').toggleClass('active');
    })
    $(".language-mobi").mouseleave(function () {
        $(this).removeClass("active");
    });
})
