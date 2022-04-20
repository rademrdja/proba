// var infrastructurePartnersSwiper = new Swiper(".infrastructurePartners", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });

/*var naturalni = new Swiper(".infrastructurePartners", {
  autoHeight: true,
  grabCursor: true,
  slidesPerView: "auto",
  autoplay: true,
  loop: true,
  speed: 100,
  breakpoints: {
    1024: {
      slidesPerView: 1,
      spaceBetween: 200,
    },
    950: {
      slidesPerView: 1,
      spaceBetween: 100,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});*/

var naturalni = new Swiper(".infrastructurePartners", {
  autoHeight: true,
  grabCursor: true,
  slidesPerView: "auto",
  autoplay: true,
  loop: true,
  speed: 100,
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 100,
    },
  },
});
