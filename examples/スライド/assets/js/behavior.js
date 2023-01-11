const swiper = new Swiper(".swiper", {
  effect: 'cube',
  cubeEffect: {
    shadow: true,
    slideShadow: true,
    shadowOffset: 100,
    shadowScale:0.9
  },
  // 『効果』のスピードを変えるオプション
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