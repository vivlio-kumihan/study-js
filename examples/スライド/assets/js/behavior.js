const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  speed: 1000,
  
  // 自動で再生
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  // ページネーションをクリックして該当写真まで移動
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // ナビゲーションのタブを表示
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})