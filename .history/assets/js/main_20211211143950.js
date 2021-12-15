$(document).ready(function () {
    $('.photo-library .list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 3000,
        asNavFor: '.photo-library .nav__list',
    });
    $('.photo-library .nav__list').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.photo-library .list',
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        focusOnSelect: true,
        pauseOnHover: true,
        // responsive: [
        //     {
        //         breakpoint: 576,
        //         settings: {
        //             slidesToShow: 4,
        //             slidesToScroll: 1,
        //             arrows: false,
        //             autoplay: true,
        //             speed: 2000,
        //             autoplaySpeed: 3000,
        //         }
        //     },
        // ]
    });
})