// Navigation toggle

const navBtn = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");

navBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("toggle");
});

// Navigation show on scroll

const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Swiper

var mySwiper = new Swiper(".swiper-container", {
  autoHeight: false,
  grabCursor: true,
  slidesPerView: 3,
  autoplay: true,
  loop: true,
  speed: 400,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 150,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
