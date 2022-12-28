const firstSwiper = new Swiper('.swiper.first', {
  // Optional parameters
  loop: true,
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
    el: '.swiper-pagination.first',
    clickable: true
  },

  // ナビゲーションのタブを表示
  navigation: {
    nextEl: '.swiper-button-next first',
    prevEl: '.swiper-button-prev first',
  }
})

const secondSwiper = new Swiper('.swiper.second', {
  // Optional parameters
  loop: true,
  effect: 'fade',
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
    el: '.swiper-pagination.second',
    clickable: true
  },

  // ナビゲーションのタブを表示
  navigation: {
    nextEl: '.swiper-button-next second',
    prevEl: '.swiper-button-prev second',
  }
})