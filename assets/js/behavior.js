//////////////////////////////////////////////////
// 配列

// 配列の生成
// new Array()
const numArr = new Array(1,2,3)
const fruit = new Array("apple", "banana", "orange")
const member = new Array(
  {
    name: ["高広", "信之"],
    age: 57,
    gender: "male"
  },
  {
    name: ["木田", "紀子"],
    age: 58,
    gender: "female"
  },
  {
    name: ["竹中", "丘像"],
    age: 60,
    gender: "male"
  }
)
console.log(numArr)
console.log(fruit)
console.log(`${member[1].name[0]}${member[1].name[1]}さんは、${member[1].age }歳です。`)

// 配列リテラル
// const fruit = ["apple", "banana", "orange"]
// console.log(fruit)

// 配列へ要素を追加
/////  push    array <= (item)
/////  pop     arra |-> y
/////  umshift (item) => array
/////  shift   a <-| rray
// 配列の最後へ
fruit.push("grape");
fruit.push("melon");
console.log(fruit);

// 配列の最初へ
fruit.unshift("grape");
fruit.unshift("melon");
console.log(fruit);

// 配列の要素を削除
// 配列の最後
fruit.pop();
console.log(fruit);

// 配列の最初
fruit.shift();
console.log(fruit);