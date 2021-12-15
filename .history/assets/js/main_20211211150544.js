$(document).ready(function () {
    $('.album-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        speed: 2000,
        autoplaySpeed: 3000,
        asNavFor: '.album .nav-list',
    });
    $('.album .nav-list').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.album-list',
        infinite: true,
        autoplay: true,
        // speed: 2000,
        // autoplaySpeed: 3000,
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