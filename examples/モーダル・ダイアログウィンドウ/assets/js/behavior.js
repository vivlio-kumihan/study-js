// for モーダル
const modalOpenBtn = document.getElementById("modal-open"),
      modal = document.querySelector(".modal"),
      coverBg = document.getElementById("cover-background")
      modalCloseBtn = document.getElementById("modal-close"),

modalOpenBtn.addEventListener("click", () => {
  // toggleでも振る舞いは変わらない。toggleとaddの違い!?　なんだ?
  // modal.classList.toggle("active")
  // coverBg.classList.toggle("active")
  modal.classList.add("active")
  coverBg.classList.add("active")
})

modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("active")
  coverBg.classList.remove("active")

})

// a href問題を解決する
const anchor = document.querySelectorAll(".container a")

anchor.forEach(element => {
  element.addEventListener("click", (tagEvent) => {
    tagEvent.preventDefault()
    // element.nextElementSibling.classList.toggle("active")
  })
})