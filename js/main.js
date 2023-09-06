$( document ).ready(function() {
    const features = new Swiper('.features__slider', {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: false,

      pagination: {
        el: '.features__pagination',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      },

    });

    AOS.init();
});