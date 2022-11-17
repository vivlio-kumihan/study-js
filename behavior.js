///////////////////
// JSの使い方　その1
// htmlの"body終了タグ直前"に『指定するJSファイルの在処』を記述する。
// そして、担保として、
// JS側でも、HTMLドキュメントを読み込んでから『以下の命令』をする一文を作成しておく。

// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelectior("ul l");
// });


///////////////////
// JSの使い方　その2
// htmlのheadの中に記述する。
// 『defer』属性をつけることでhtmlを読み込んでからJSを効かせる。
// JSの記述しシンプルになる。

// document.querySelectior("ul l");


///////////////////
// Debugのための関数2つ

// console.log("test");
// alert(3 * 31);


///////////////////
// 変数

// letは上書き可能

// let x = 2;
// x = 50;
// let y = 3;
// console.log(x + y);
// // => 53

// constは上書き不可　定数だから

// const x = 2;
// x = 50;
// let y = 3;
// console.log(x + y);
// // => Uncaught TypeError: Assignment to constant variable.


// htmlでJSの変数を使う　その1
// htmlでの記述はJSによって上書きされる。
// これもある意味変数的な使い方。

// document.getElementById("test").textContent = "input word test";


// htmlでJSの変数を使う　その2
// 変数の演算を代入してみる。

// let x = 2;
// let y = 30
// document.getElementById("test").textContent = x + y;

// 配列に持って行くまでの前段階としての変数への値の代入

// const tax = 1.1;
// const applePrice = 100;
// const orangePrice = 60;

// document.getElementById("apple-total-amount").textContent = applePrice * tax;
// document.getElementById("orange-total-amount").textContent = orangePrice * tax;


///////////////////
// 関数　addEventListener
// 対象をクリックすると定義した関数を起動させる。

// 対象をクリックするとコンソールに結果が表示される。
// document.getElementById("test").addEventListener("click", function(){
//   console.log("testをクリックしました。");
// });


// // 対象をクリックするとhtmlが書きかわる。
// let obj = document.getElementById("test");
  
// obj.addEventListener("click", function(){
//   // 複数の処理を書ける。
//   obj.textContent = "クリックするとテキストが書き変わる。";
//   // 各順番よりalertの方が優先される。
//   alert("クリックするとテキストが書き変わる。")
// });
    
    
// this
    
// document.getElementById("test").addEventListener("click", function(){
//   // 『this』には、注目しているオブジェクトが入っている。
//   this.textContent = "クリックするとテキストが書き変わる。";
//   alert("クリックするとテキストが書き変わる。")
// });


///////////////////
// 配列

// // 配列を生成させる。
// const fruit = ["apple", "banana", "orange"];
// console.log(fruit);
// let hello = "hello";

// // (3)['apple', 'banana', 'orange']
// // 0:"apple"
// // 1:"banana"
// // 2:"orange"
// // length:3
// // [[Prototype]]:Array(0)

// インデックスを使って呼び出す。
const fruit = ["apple", "banana", "orange"];
document.getElementById("test").textContent = fruit[0];

// // 配列の最後にオブジェクトを追加する。
// fruit.push("grape");
// fruit.push("melon");
// console.log(fruit);

// // 配列の最初に追加する。
// fruit.unshift("grape");
// fruit.unshift("melon");
// console.log(fruit);

// // 配列の最後を削除する
// fruit.pop();
// console.log(fruit);

// // 配列の最初を削除する
// fruit.shift();
// console.log(fruit);