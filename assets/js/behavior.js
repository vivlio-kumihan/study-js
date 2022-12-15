//////////////////////////////////////////////////
// 配列
// 兄弟要素の操作。=> nextElementSibling, previousElementSibling

// 次にある、兄弟要素を取得する。　nextElementSibling
const list1 = document.querySelector(".list li");
console.log(list1.nextElementSibling);

// 前にある、兄弟要素を取得する。　previousElementSibling
const list2 = document.querySelector(".list");
console.log(list2.lastElementChild.previousElementSibling);