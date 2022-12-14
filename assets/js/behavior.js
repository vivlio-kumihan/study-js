//////////////////////////////////////////////////
// 配列
// 配列の中身をforEachを使いHTMLのリストで出力する。

// 引数は、Element, Index, Arrayを持てる。()で括らないとエラーになる。
const fruit = ["apple", "banana", "orange", "grape", "melon"];
fruit.forEach((name, idx, array) => {
  let li = document.createElement("li");
  li.textContent = fruit[idx];
  document.getElementById("fruits").appendChild(li);
})

// 普通は、Elementだけでだろう。
const member = ["木田","竹中","高広","小林"]
member.forEach(element => {
  let li =document.createElement("li")
  li.textContent = element
  document.getElementById("member").appendChild(li)
})