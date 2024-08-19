document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        spaceBetween: 32, // Расстояние между слайдами
        grabCursor: true,
        centeredSlides: true,

        breakpoints: {
            0: {
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            },
            600: {
                slidesPerView: 1.5,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            },
            900: {
                slidesPerView: 2,
            },
            1150: {
                slidesPerView: 3,
            },
        },
    });
});
