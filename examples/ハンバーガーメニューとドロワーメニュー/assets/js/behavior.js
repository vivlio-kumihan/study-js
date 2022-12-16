// for ハンバーガーボタン
// toggleで効果のかかりをスイッチング
const menuButton = document.getElementById("menuButton")
menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active")
})