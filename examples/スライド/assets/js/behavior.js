

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  // 単位はピクセル。単位は書かない。
  // spaceBetween: 15,
  // 一番最初のスライドをセンターに置く。
  centeredSlides: true,
  // レスポンシブル対応 breakpoints
  breakpoints: {
    769: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1025: {
      slidesPerView: 5,
      spaceBetween: 0,
    }
  },
  // 1秒かけて移遷する。
  speed: 1000,
  // 自動で再生
  autoplay: {
    // 2.5秒で自動送りをする。
    delay: 2500,
    // autoplay中にページネーションを触ったりすると自動再生は中止される。
    // 回避するオプションが、disableOnInteraction。
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