const swiper = new Swiper('.swiper-1',
    {
        direction: 'horizontal',
        watchOverflow: true,
        navigation:
        {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',},
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
                          
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
            },

            980: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 25,
            },

            1200: {
                slidesPerView: 4,
                slidesPerColumn: 2,
                spaceBetween: 25,
                centeredSlides: false,
                grid: {
                    rows: 2,
                    fill: 'row',
                },
            }
        }
    }
);

const swiper2 = new Swiper('.swiper-2',
    {
        direction: 'horizontal',
        watchOverflow: true,
        navigation:
        {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
                          
            650: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                // spaceBetween: 20,
            },

            980: {
                slidesPerView: 3,
                slidesPerGroup: 2,
                // spaceBetween: 20,
            },

            1200: {
                slidesPerView: 4,
                // centeredSlides: false,
                // spaceBetween: 30,
            }
        }
    }
);