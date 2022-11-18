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

// // インデックスを使って呼び出す。
// const fruit = ["apple", "banana", "orange"];
// document.getElementById("test").textContent = fruit[0];

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


// ///////////////////
// // forを使った繰り返し

// for (let i = 0; i < 10; i++) {
  //   console.log(i);
  // }

  // // htmlに順番に任意の数字を表示させる。

  // for (let i = 0; i < 10; i++) {
    //   // liの要素を生成させて、そこへ数値を代入していけば数字を出すリストができるはず。
    //   let li = document.createElement("li");
//   // そのliタグに対して文字列を代入するには『textContent』メソッドを充てて代入する。
//   li.textContent = i;
//   // 生成したliタグを順次ulタグ内へ追加する。『appendChild』配列の末尾に追加的なもののよう。作法がpythonと一緒。
//   document.getElementById("number").appendChild(li);
// }

// // htmlに順番に配列の中身を表示させる。
// // foreachは無いようだ。地道に書けということ。

// const fruit = ["apple", "banana", "orange", "grape", "melon"];
// for (let i = 0; i < fruit.length; i++) {
  //   let li = document.createElement("li");
  //   li.textContent = fruit[i];
  //   document.getElementById("number").appendChild(li);
  // }

  // // forEachでやってみる。

  // const fruit = ["apple", "banana", "orange", "grape", "melon"];
  // fruit.forEach((name, idx) => {
//   let li = document.createElement("li");
//   li.textContent = fruit[idx];
//   document.getElementById("fruits").appendChild(li);
// })

// // for ofでやってみる。

// const fruit = ["apple", "banana", "orange", "grape", "melon", "strawberry"];
// for (item of fruit) {
//   let li = document.createElement("li");
//   li.textContent = item;
//   document.getElementById("fruits").appendChild(li);
// }


// // ///////////////////
// // 要素を取得する

// // ID
// objId = document.getElementById("menu");
// console.log(objId);

// // CSSセレクター
// objSelector = document.querySelector("li");
// console.log(objSelector);

// objSelctAll = document.querySelectorAll("li");
// console.log(objSelctAll);

// // HTML
// objHTML = document.documentElement;
// console.log(objHTML);

// // CSSセレクターのbody
// objBody = document.body;
// console.log(objBody);

// // CSSセレクターのhead
// objHead = document.head;
// console.log(objHead);

// // 要素を取得し該当の値を変更する。

// // objSelects = document.querySelectorAll("ul li a");
// // for (let i = 0; i < objSelects.length; i++) {
//   //   objSelects[i].textContent = "hello" + (i + 1);
//   // }

// objSelects = document.querySelectorAll("ul li a");
// objSelects.forEach((element, idx) => {
//   element.textContent = "hello" + (idx + 1);
// });


// // ///////////////////
// クラスを切り替える

// // クリックすると要素を変更する。
// document.getElementById("switchClasses").addEventListener("click",  function(){
//   this.textContent = "Click! Click! Click! You click here!";
// });

// // クラスを切り替えに応じてクラスを付加する。
// document.getElementById("switchClasses").addEventListener("click",  function(){
//   this.textContent = "Click! Click! Click! You click here!";
//   this.classList.add("add-elem");
// });

// クラスを削除する。
document.getElementById("switchClasses").addEventListener("click",  function(){
  this.textContent = "Click! Click! Click! You click here!";
  this.classList.remove("add-elem");
});

