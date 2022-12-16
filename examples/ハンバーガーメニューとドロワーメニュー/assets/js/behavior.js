// for ハンバーガーボタン
// toggleで効果のかかりをスイッチング
const menuButton = document.getElementById("menuButton"),
      menu = document.getElementById("menu")
menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active")
  menu.classList.toggle("active")
})