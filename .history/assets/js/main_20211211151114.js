$(document).ready(function () {
    $('.album-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 3000,
        asNavFor: '.nav-list',
    });
    $('.nav-list').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.album-list',
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        focusOnSelect: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 576,
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
})