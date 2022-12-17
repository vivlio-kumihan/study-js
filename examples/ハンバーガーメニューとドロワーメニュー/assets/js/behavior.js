// for ハンバーガーボタン
// toggleで効果のかかりをスイッチング
const menuBtn = document.getElementById("menuButton"),
      menu = document.getElementById("menu")
      coverBg = document.getElementById("cover-background")
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active")
  menu.classList.toggle("active")
  coverBg.classList.toggle("active")
})