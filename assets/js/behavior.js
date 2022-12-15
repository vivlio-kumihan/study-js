//////////////////////////////////////////////////
// 配列
// querySelector() => .childrenでHTMLCollectionを吐き出す。forEach()では使えない。
// querySelectorAll() => NodeListとを吐き出す。

// ulの子要素で配下のliが配列として全て取れる。
// elementに入っているのはHTML。valueが欲しい場合は、.textContentを充てる。
const lists = document.querySelector("ul").children
// HTMLCollectionとして取っている。
// HTMLCollection(5)[li.list, li.list, li.list, li.list, li.list]
console.log(lists)

for (let idx = 0; idx < lists.length; idx++) {
  const element = lists[idx];
  console.log(idx, element)
  console.log(idx, element.textContent)
}

// // forEachでは、『children』が使えないということ。
// const foreachLists = document.querySelectorAll(".list")
// // NodeListとして取っている。この差だわ。
// // NodeList(5)[li.list, li.list, li.list, li.list, li.list]
// console.log(foreachLists)

// foreachLists.forEach((element, idx) => {
//   console.log(idx, element)
//   console.log(idx, element.textContent)
// })