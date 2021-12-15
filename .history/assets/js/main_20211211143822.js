$(document).ready(function () {
    $('.news__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 3000,
        asNavFor: '.nav__list',
    });
})