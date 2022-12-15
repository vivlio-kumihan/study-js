//////////////////////////////////////////////////
// 配列
// 子要素の操作。子要素の最初と最後を選ぶ。=> firstElementChild, lastElementChild

const selectLiID = document.getElementById("list")
console.log(selectLiID)
console.log(selectLiID.firstElementChild.textContent)
console.log(selectLiID.lastElementChild.textContent)

const selectLiClass = document.querySelector(".list")
console.log(selectLiClass.firstElementChild.textContent)
console.log(selectLiClass.lastElementChild.textContent)
