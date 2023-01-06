const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  // 一度に見えるスライドの数を設定する。
  // 『CSSのpadding』でスライドが見切れてしまうのを回避することを忘れずに。
  slidesPerView: 3,
  // 先頭のスライドをセンター位置にする。
  centeredSlides: true,
  coverflowEffect: {
    // 両サイドのスライドがトップスライドと重なる箇所に影を入れる。デフォルトは『true』
    slideShadows: true,
    // 両サイドのスライドの角度　デフォルトは『50』
    rotate: 20,
    // スライドの間隔を狭める　デフォルトは『0』
    stretch: 100,
    // スライドの列の奥行き
    depth: 50,
    // スライドを回転させる
    modifier: 8
  },
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },

  // ページネーションをクリックして該当写真まで移動
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // ナビゲーションのタブを表示
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})