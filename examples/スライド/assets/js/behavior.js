const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  centeredSlides: true,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
})