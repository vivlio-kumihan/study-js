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


// ///////////////////
// 要素を取得する

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


// ///////////////////
// classList クラスを切り替える

// // クリックすると要素を変更する。
// document.getElementById("switchClasses").addEventListener("click",  function(){
//   this.textContent = "Click! Click! Click! You clicked here!";
// });

// // クラスを切り替えに応じてクラスを付加する。
// document.getElementById("switchClasses").addEventListener("click",  function(){
//   this.textContent = "Click! Click! Click! You clicked here!";
//   this.classList.add("add-elem");
// });

// // クラスを削除する。
// document.getElementById("switchClasses").addEventListener("click",  function(){
//   this.textContent = "Click! Click! Click! You clicked here!";
//   this.classList.remove("add-elem");
// });

// // クラスの付け替え。クラスを付いていなと時には付与し、付いていと時は削除させる挙動。
// document.getElementById("switchClasses").addEventListener("click",  function(){
//   this.textContent = "Click! Click! Click! You clicked here!";
//   this.classList.toggle("add-elem");
// });

// // クラスの付け替え。クラスを付いていなと時には付与し、付いていと時は削除させる挙動。
// document.getElementById("switchClasses").addEventListener("click",  function(){
//   this.textContent = "Click! Click! Click! You clicked here!";
//   this.classList.toggle("add-elem");
//   const list = document.querySelectorAll("#list li");
//   list.forEach((element, idx) => {
//     element.textContent = "Hello World!" + (idx + 1)
//     element.classList.toggle("opty");
//   });
// });


// ///////////////////
// 子要素・兄弟要素・親要素を取得する

// // children 『ul』の子要素『li』を取得する。
// const list = document.querySelector(".list").children;
// for (let idx = 0; idx < list.length; idx++) {
//   const element = list[idx];
//   console.log(element);
// }

// // 『children』で取得したインスタンスが、『forEach』ではリストと判断されない。
// // 『querySelectorAll』を使って回避する。
// const list = document.querySelectorAll(".list li");
// list.forEach((element, idx) => {
//   console.log(element);
// });

// // 最初・最後の要素を取得する。　firstElementChild, lastElementChild
// const list = document.querySelector(".list");
// console.log(list.firstElementChild);
// console.log(list.lastElementChild);

// // 次の兄弟要素を取得する。　nextElementSibling
// const list1 = document.querySelector(".list li");
// console.log(list1.nextElementSibling);

// // 前の兄弟要素を取得する。　previousElementSibling
// const list2 = document.querySelector(".list");
// console.log(list2.lastElementChild.previousElementSibling);

// // 親要素を取得する。　parentNode
// const list = document.querySelector(".list li");
// console.log(list.parentNode);


// // ///////////////////
// // 乱数と配列

// // random() 　0-1までの乱数を生成させる関数
// // const randomNum = Math.random();

// // 生成される乱数の範囲
// // * 5 => 0 - 4.99999.........
// // * 10 => 0 - 9.99999.........
// // * 100 => 0 - 99.99999.........
// // Math.floor(をを使って1-10までの整数を出力する。
// // console.log(Math.floor(randomNum * 10 + 1));

// // document.getElementById("test").textContent = Math.floor(randomNum * 10 + 1);

// // おみくじのコードで『配列』と『乱数』を使ってみる。
// document.getElementById("switchButton").addEventListener("click", function () {
  //   this.textContent = "本日の運勢は…";
  //   this.classList.toggle("add-behavior");

  //   const res = document.querySelector(".result");
  //   const result = ["大吉", "中吉", "小吉", "末吉", "凶", "大凶"];
  //   let resNum = Math.floor(randomNum * 6);
  //   res.textContent = result[resNum];
//   res.classList.add("opty");
// });


// ///////////////////
// // if

// const idTest = document.getElementById("test")
// const number = Math.floor(Math.random() * 10 + 1);

// if (number === 10) {
  //   idTest.textContent = "スコアーは、" + number + "です。";
  // } else if (number === 1) {
    //   idTest.textContent = "スコアーは、" + number + "です。";
    // } else if (number <= 5) {
//   idTest.textContent = "スコアーは、5以下です。" + number;
// } else {
  //   idTest.textContent = "スコアーは、" + number + "です。";
  // }


// ///////////////////
// 比較演算子

// const idTest = document.getElementById("test")
// const a = 2, b = 2;

// if (a > b) {
//   idTest.textContent = a + "は、" + b + "より大きい。";
// } else if (a < b) {
//   idTest.textContent = a + "は、" + b + "より小さい。";
// } else if (a === b) {
//   idTest.textContent = a + "と" + b + "は同じ値。";
// }

// const idTest = document.getElementById("test")
// const a = 2, b = 2;
// const result = a < b;

// if (result) {
//   idTest.textContent = a + "は、" + b + "より大きい。";
// } else {
//   idTest.textContent = a + "と" + b + "は同じ値。";
// }

// <     より大きい
// >     より小さい
// <=    以上
// >=    以下
// ===   等しい
// !==   等しく無い
// &&    かつ
// ||    または


// ///////////////////
// // switc文

// // 最初に自分で考えたif文
// // 模範解を見て自分は考えすぎ。もっとシンプルししないと。

// const idIns = document.getElementById("weather");
// const weathers = ["晴れ", "曇り", "雨", "雷雨"],
//       idx = Math.floor(Math.random() * weathers.4);
// if (idx === 0) {
//   idIns.textContent = "今日の天気は" + weathers[idx] + "です。";
// } else if (idx === 1) {
//   idIns.textContent = "今日の天気は" + weathers[idx] + "です。";
// } else if (idx === 2) {
//   idIns.textContent = "今日の天気は" + weathers[idx] + "です。";
// } else {
//   idIns.textContent = "今日の天気は" + weathers[idx] + "です。";
// }

// // 模範解答　その1 if文で書く
// const weatherIns = document.getElementById("weather");
// const msgIns = document.getElementById("message");
// const weathers = ["晴れ", "曇り", "雨", "雷雨"],
//       idx = Math.floor(Math.random() * weathers.length),
//       weather = weathers[idx];

// weatherIns.textContent = "今日の天気は" + weather + "です。";

// if (weather === "晴れ") {
//   msgIns.textContent = "レンズを向ける方向は太陽ですよ。";
// } else if (weather === "曇り") {
//   msgIns.textContent = "光が上手くまわってくれるといいですね。";
// } else if (weather === "雨") {
//   msgIns.textContent = "雨と時でしかと撮れないシズル感を狙ってみてはいかがか。";
// } else {
//   msgIns.textContent = "溜まった現象作業をやってみてはいかがか。";
// }

// // 模範解答　その2　switch文で書く。
// const weatherIns = document.getElementById("weather");
// const msgIns = document.getElementById("message");
// const weathers = ["晴れ", "曇り", "雨", "雷雨"],
//       idx = Math.floor(Math.random() * weathers.length),
//       weather = weathers[idx];

// weatherIns.textContent = "今日の天気は" + weather + "です。";

// function put2msgIns(text) {
//   msgIns.textContent = text;
// }

// switch (weather) {
//   case "晴れ":
//     put2msgIns("レンズを向ける方向は太陽ですよ。");
//     break;
//   case "曇り":
//     put2msgIns("光が上手くまわってくれるといいですね。");
//     break;
//   case "雨":
//     put2msgIns("雨と時でしかと撮れないシズル感を狙ってみてはいかがか。");
//     break;
//   default:
//     put2msgIns("溜まった現象作業をやってみてはいかがか。");
//     break;
// }


// // 模範解答？　その3　switch文で書く。

// 入力した値を出力する　その1

// const menu = ["coffee", "tea", "juice", "toast", "cake", "flied-potato", "other"]
// for (item of menu) {
//   let li = document.createElement("li");
//   li.textContent = item;
//   document.querySelector(".menu").appendChild(li);
// }

// const showInput = () => {
//   const inPut = document.getElementById("in-put").value;
//   let price = "";

//   switch (inPut) {
//     case "coffee": case "tea": case "juice":
//       price = "350円" ;
//       break;
//     case "toast": case "cake": case "flied-potato":
//       price = "600円";
//       break;
//     default:
//       price = "1000円";
//   }
//   const outPut = inPut + "は『" + price + "』です。";
//   document.getElementById("out-put").textContent = outPut;
// }


// // 入力した値を出力する　その2
// // クリックしたら行動を起こす。
// document.getElementById("button").addEventListener("click", function() {
//   document.getElementById("result").textContent = 331;
// });


// ///////////////////
// // 加算演算子

// // クリックしたら行動を起こす。
// // count = count++　こんなことをしてはダメ。
// let count = 0;
// document.getElementById("button").addEventListener("click", function() {
//   // count = count + 1; 
//   count++
//   document.getElementById("result").textContent = count;
// });

// // 減算演算子

// let count = 100;
// document.getElementById("button").addEventListener("click", function() {
//   // count = count - 1; 
//   count--;
//   document.getElementById("result").textContent = count;
// });

// // 加算代入

// // nずつ増やす。
// let count = 0;
// document.getElementById("button").addEventListener("click", function() {
//   // count = count + 2; 
//   count += 2;
//   document.getElementById("result").textContent = count;
// });

// // 減算代入

// let count = 100;
// document.getElementById("button").addEventListener("click", function() {
//   // count = count - 2; 
//   count -= 2;
//   document.getElementById("result").textContent = count;
// });


// ///////////////////
// 切り捨て、切り上げ、四捨五入、冪乗

// // 切り捨て
// // 小数点以下を切り捨てる。
// // 注意点は、マイナスの数値の場合（『-1.9』）、
// // floorは、切り上げて『-2』
// // truncは、切り捨てて『-1』となる。
// num = -1.9;
// console.log(Math.floor(num));
// console.log(Math.trunc(num));

// // 切り上げ
// // 注意点は、マイナスの数値の場合（『-1.9』）、
// // 切り上げだから『-1』へ『上がる』
// num = -1.9;
// console.log(Math.ceil(num));

// // 四捨五入
// num = -1.4;
// console.log(Math.round(num));

// // 冪乗
// num = 3;
// console.log(Math.pow(num, 3));


// ///////////////////
// // while

// // 最近の録画なんだろうか　文末の『；』がなくなった。

// // 文法　その1
// let i = 1
// while (i < 10) {
//   console.log("hello" + i) 
//   i++
// }

// // while 要素がある間処理を続けるのに便利。
// // forEachでいいのでは？　とは思うが、とりあえずwhileで少し試す。

// // リストの要素を抽出してみる。  
// let i = 0
// const ins = document.querySelectorAll("#list li")

// while (i < ins.length) {
//   console.log(ins[i])
//   i++
// }

// // HTMLの中に任意の要素がある限り上から順に吐き出させる。
// // ただし、ちょっとした罠あり。
// // 終端を知らないから無限に回って呼出をやる。
// while (document.querySelector("#list li")) {
//   console.log(document.querySelector("#list li"));
//   document.querySelector("#list li").remove();
// }

// // と、こういう風には書けない。無限になってまう。
// // const ins = document.querySelector("#list li")
// // while (ins) {
// //   ins.remove()
// // }


// ///////////////////
// // CSSを変更・削除・取得

// // CSSの属性を『変更』
// //  JSでCSSの属性を変更すると、
// //  element style扱いになるので優先度が高くなる。

// // 要素.style.プロパティ名 = "値"
// document.getElementById("box").style.opacity = ".3"
// document.getElementById("box").style.width = "200px"
// document.getElementById("box").style.fontSize = "5rem"
// document.getElementById("box").style.backgroundColor = "blue"


// // 要素.style.cssText = "CSSの記述"
// document.getElementById("box").style.cssText = "width: 80%; height: 20rem; background-color: red;"

// // HTMLに直書きしているCSSについて書き方があることに留意しておく。なんかある。
// // element styleを消す場合。
// document.getElementById("box").style.width = ""

// // element styleを取得する場合。
// // 連想配列でelement styleで変更しているプロパティがわかる。
// console.log(document.getElementById("box").style)

// // 連想配列でelement styleで変更しているプロパティの『値』がわかる。
// console.log(document.getElementById("box").style.width)

// // element style以外 = CSSで指定した値を取得する場合。
// // トリガにするために必要な値が欲しい場合に多用すると思われる。
// console.log(window.getComputedStyle(document.getElementById("box")).width)
// console.log(window.getComputedStyle(document.getElementById("box")).alignItems)


// ///////////////////
// // 関数

// // 定義する。
// // この書き方だったらreturnしなくてもいい。でも現実的では無い。
// function sayGreet(greet = "hello") {
//   console.log(greet)
// }

// sayGreet()
// sayGreet("goodbye")

// // 消費税を計算する。
// // その1
// const tax = 1.1
// function calTax(price) {
//   return Math.floor(price * tax)
// }

// console.log(calTax(100))
// document.getElementById("price").textContent = calTax(100)

// // その2
// // クリックしたら行動を起こす。
// const tax = 1.1
// function calTax(price) {
//   return Math.floor(price * tax)
// }
// document.getElementById("button").addEventListener("click", function () {
//   document.getElementById("result").textContent = calTax(100)
// });

// // その3
// // 入力したら結果をHTMLに返す。
// const tax = 1.1
// function calTax(price) {
//   return Math.floor(price * tax)
// }

// const showInput = () => {
//   // const inPut = ""
//   inPut = document.getElementById("in-put").value
//   priceOnTax = calTax(inPut)
//   stm = inPut + "円の税込み価格は、" + priceOnTax + "円です。"
//   document.getElementById("out-put").textContent = stm
// }

// // その4
// // 引数の入れ方の工夫でシンプルな構造で出力の振り分けができる。
// const tax = 1.1
// function calTax(price) {
//   return Math.floor(price * tax)
// }

// // 該当する最初の一つ目の要素にしか値は代入されない。
// document.getElementById("result").textContent = "100円の消費税込みの価格は110円です。"

// // タグにテキストを投げる関数を定義する。
// function insertText(itemPrice) {
//   document.getElementById("result").textContent = itemPrice + "円の消費税込みの価格は" + calTax(itemPrice) + "円です。"
// }

// insertText(100)

// // 引数を使って複数に書き分けて行く。
// function insertText(itemPrice, elem) {
//   document.querySelector(elem).textContent = itemPrice + "円の消費税込みの価格は" + calTax(itemPrice) + "円です。"
// }

// insertText(100, "#result.price1")
// insertText(200, "#result.price2")
// insertText(300, "#result.price3")


///////////////////
//　連想配列

////////// JS連想配列の定義
////////// ・連想配列 => オブジェクト　配列はその派生。
////////// ・オブジェクトは、名と値がペアになった『プロパティ』を持つ。
////////// ・プロパティの値に、『関数』を持つことができる。
////////// ・これをメソッドと呼ぶ。

// // 連想配列の生成方法と呼び出し方
// const item = {
//   name: "power book pro",
//   price: 200000,
//   campaign: true,
//   parts: ["HD", "メモリー", "CPU"]
// }

// // dotで繋て呼び出す。
// document.getElementById("name").textContent = "商品名は、" + item.name + "です。"
// document.getElementById("price").textContent = "価格は、" + item.price + "円です。"

// // よく見る呼び出し方
// document.getElementById("name").textContent = "商品名は、" + item["name"] + "です。"
// document.getElementById("price").textContent = "価格は、" + item["price"] + "円です。"

// // 真偽値もプロパティーにすることができる。
// if (item["campaign"]) {
//   document.getElementById("campaign").textContent = "大売り出し中！"
// }

// // プロパティが配列の場合、値の取り出しHTML上でリストで表現する。
// // for
// for (let i = 0; i < item["parts"].length; i++) {
//   let li = document.createElement("li");
//   li.textContent = item["parts"][i];
//   document.getElementById("parts").appendChild(li);
// }

// // forEach
// item["parts"].forEach(element => {
//   let li = document.createElement("li");
//   li.textContent = element;
//   document.getElementById("parts").appendChild(li);
// });


// // 配列になっているプロパティを『・』で繋いだ文字列にして出力する。文字列に追記する。
// // for・forEach版
// // for
// str = "";
// for (let i = 0; i < item["parts"].length; i++) {
//   str += item["parts"][i];
//   if (i !== item["parts"].length - 1) {
//     str += "・";
//   }
// }
// document.getElementById("parts2").textContent = str;

// // forEach
// str = "";
// item["parts"].forEach((elem, idx) => {
//   str += elem;
//   if (idx !== item["parts"].length - 1) {
//     str += "・";
//   }
// });
// document.getElementById("parts2").textContent = str;

// // 配列を『join』で繋いでstringで運用する。
// const items = item["parts"].join("・")
// document.getElementById("parts2").textContent = item["name"] + "を構成しているパーツは、" + items + "です。"

// // 値を変更する。
// item["parts"].pop()
// item["parts"][1] = "TV"

// const items = item["parts"].join("・")
// document.getElementById("parts2").textContent = item["name"] + "を構成しているパーツは、" + items + "です。"

// // 連想配列の内容を確認する。 console.table(object);
// console.log(item)
// console.table(item)


///////////////////
//　型

// 型を明示する。　typeof
let input = document.getElementById("input").textContent
console.log(typeof input) 
// => string
// 文字列の結合になる。
document.getElementById("output").textContent = input + 1000

// 型を変換する。　Number(ins), String(ins)
console.log(Number(input))
input = Number(input)
// 数ととして計算する。
document.getElementById("output").textContent = input + 1000
