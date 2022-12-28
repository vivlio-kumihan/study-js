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


// ///////////////////
// //　型

// // 型を明示する。　typeof
// let input = document.getElementById("input").textContent
// console.log(typeof input) 
// // => string
// // 文字列の結合になる。
// document.getElementById("output").textContent = input + 1000

// // 型を変換する。　Number(ins), String(ins)
// console.log(Number(input))
// input = Number(input)
// // 数ととして計算する。
// document.getElementById("output").textContent = input + 1000


// ///////////////////
// //　時間

// // 現在の日付　インスタンスを生成させる。
// const thisTime = new Date(), 
//       week = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]

// // 現在時間を表示させる。
// document.querySelector(".today").textContent = thisTime

// // 年を抜き出す
// let year = thisTime.getFullYear() + "年"
// // 月を抜き出す。
// let month = thisTime.getMonth() + 1 + "月"
// // 日を抜き出す。
// let day = thisTime.getDate() + "日"
// // 日曜日を0として、各曜日のインデックスを返す。
// let nthDay = week[thisTime.getDay()]
// // 時間（時）を抜き出す。
// let hours = thisTime.getHours() + "時"
// // 時間（分）を抜き出す。
// let minutes = thisTime.getMinutes() + "分"
// // 時間（秒）を抜き出す。
// let seconds = thisTime.getSeconds() + "秒"

// // 確認する。
// console.log(thisTime)
// console.log(month)
// console.log(day)
// console.log(nthDay)
// console.log(hours)
// console.log(minutes)
// console.log(seconds)

// // 現在の日付を取得する。それをリストで表示する。 => createElement("li") appendChild(li)
// let myDate = [year, month, day, nthDay, hours, minutes, seconds]
// myDate.forEach(elem => {
//   let li = document.createElement("li")
//   li.textContent = elem
//   document.querySelector("ul.list-view").appendChild(li)
// });


// // n日後の時間を取得する。=> setDate, getDate()
// const thisTime = new Date()

// function outPutDate(ins) {
//   const week = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
//   let year = ins.getFullYear() + "年"
//   let month = ins.getMonth() + 1 + "月"
//   let day = ins.getDate() + "日"
//   let nthDay = week[ins.getDay()]
//   let hours = ins.getHours() + "時"
//   let minutes = ins.getMinutes() + "分"
//   let seconds = ins.getSeconds() + "秒"
//   let elem = year + month + day + nthDay + hours + minutes + seconds
//   return elem
// }

// // 今の時間を取得する。
// console.log(outPutDate(thisTime))
// document.querySelector(".today").textContent = outPutDate(thisTime)

// // 1日後の時間を取得する。
// thisTime.setDate(thisTime.getDate() + 1) 
// document.querySelector(".future-day").textContent = outPutDate(thisTime)
// // n日後の時間を取得する。=> setDate, getDate()


// // 期間を取得する。
// const thisTime = new Date()

// function outPutDate(ins) {
//   const week = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
//   let year = ins.getFullYear() + "年"
//   let month = ins.getMonth() + 1 + "月"
//   let day = ins.getDate() + "日"
//   let nthDay = week[ins.getDay()]
//   let hours = ins.getHours() + "時"
//   let minutes = ins.getMinutes() + "分"
//   let seconds = ins.getSeconds() + "秒"
//   let elem = year + month + day + nthDay + hours + minutes + seconds
//   return elem
// }

// // 期間を読み取れた単位で変換する。
// const targetTime = new Date(2045, (3 - 1), 31)
// // nマイクロ秒 => 秒
// let eraSec = (targetTime - thisTime) / 1000
// // 秒 => 分
// let eraMin = eraSec / 60
// // 分 => 時
// let eraHor = eraMin / 60
// // 時 => 日
// let eraDay = eraHor / 24
// // 日 => 年
// let eraYer = eraDay / 365

// console.log(eraYer) 

// // まとめると、
// // 小数点を切り上てておく。
// diff =  Math.ceil((targetTime - thisTime) / (1000 * 60 * 60 * 24 * 365))
// console.log(diff)

// document.querySelector(".diff").textContent = `2045年まであと${diff}年です。`


// ///////////////////
// //　HTMLタグの属性

// 準備　aタグをすべて取得する。
// console.log(document.querySelectorAll("ul li a"))

// JSで属性を設定・取得・確認する。
// 設定 => setAttribute("属性名", "値")
// 取得 => getAttribute("属性名") 状態を持っている値で返す。
// 確認 => hasAttribute("属性名") 状態を真偽値で返す。

// arr = document.querySelectorAll("ul li a")
// arr.forEach(element => {
//   element.setAttribute("target", "_brank")
//   // 『target』属ががあるものを取得する。
//   console.log(element.getAttribute("target"))
//   // クラスを持っているものを取得する。この場合は、クラスの『値』を返す。
//   console.log(element.getAttribute("class"))
//   // クラスを持っているものを取得する。クラスがあるかどうか『真偽値』を返す。
//   console.log(element.hasAttribute("class"))
// });

// // if文を用いて、属性の付与を振り分ける。
// arr = document.querySelectorAll("ul li a")
// arr.forEach(element => {
//   if (element.getAttribute("href") !== "/") {
//     element.setAttribute("target", "_brank")
//   }
// });

// ///////////////////
// //　スクロールをきっかけに振る舞いをする。

// windowオブジェクトに対してscrollイベントを追加する。

// // "scroll"イベントを取得する。
// window.addEventListener("scroll", function() {
//   console.log("hello")
// })

// // 画面上端からの"scroll"位置(px)を取得する。数値をし下に表示させる。position: fixed;
// window.addEventListener("scroll", function() {
//   let scroll = document.documentElement.scrollTop
//   console.log(scroll)
//   document.getElementById("scroll-position").textContent = scroll
// })

// // どこまでスクロールしたかでCSSを切替える。
// window.addEventListener("scroll", function() {
//   let scroll = document.documentElement.scrollTop
//   if (scroll > 300) {
//     document.querySelector("ul").classList.add("test")
//   } else {
//     document.querySelector("ul").classList.remove("test")
//   }
// })

// // 約n秒後に振る舞いをさせる。 => setTimeout()
// // setTimeout()に関数を入れて使う。
// // 1s = 1000mm秒
// // 3s = 3000mm秒
// setTimeout(function() {
//   console.log("test2")
// }, 3000)

// // 約n秒後に振る舞いをさせる。入れ子で使って順番に表示させる。
// // setTimeout()に関数を入れて使う。
// setTimeout(function() {
//   console.log("test2")
//   setTimeout(function() {
//     console.log("test3")
//   }, 3000)
// }, 3000)

// console.log("test")

// // 約n秒後に振る舞いをさせる。関数て定義してリファクタリングする。=> setTimeout関数名)（（）不要）
// function test() {
  //   console.log("test")
  // }

// setTimeout(test, 3000)
// setTimeout(test, 6000)
// setTimeout(test, 9000)

// console.log("test")


// // 約n秒後に振る舞いをさせる。ボタンをクリックしたらn秒後に実行 => addEventListener()
// document.getElementById("test").addEventListener("click", function(){
//   setTimeout(function(){
//     document.getElementById("contents").style.display = "block"
//   }, 2000)
// })


// ///////////////////
// 定期的に処理を実行する。 => setInterval(), clearInterval()

// // 一定時間経過で処理を実行する。
// setInterval(function() {
//   console.log("test")
// }, 1000)

// // 1秒ごとにHTMLでカウントアップしてゆく。
// let elapsTime = 0

// ins = document.getElementById("time")
// ins.textContent = elapsTime
// setInterval(function() {
//   ins.textContent = elapsTime++ 
// }, 1000)

// // 処理を止める。=> clearInterval()
// let elapsTime = 0

// ins = document.getElementById("time")

// // setInterval()で生成したインスタンスを
// // clearInterval()の引数にすることで処理を止めることができる。

// // なお、『ins.textContent = elapsTime++』とすると意図した表現と変わってしまうので注意。

// const timerID = setInterval(function() {
//   elapsTime++
//   ins.textContent = elapsTime
//   if (elapsTime === 5) {
//     clearInterval(timerID)
//   }
// }, 1000)

// // リファクタリングする。 
// let elapsTime = 0
// function writeTime(t) {
//   document.getElementById("time").textContent = `${t}秒経過`
// }

// const timerID = setInterval(function() {
//   elapsTime++
//   writeTime(elapsTime)
//   if (elapsTime === 5) {
//     clearInterval(timerID)
//   }
// }, 1000)

// // カウントダウンしてみる。 
// let elapsTime = 5
// function writeTime(t) {
//   document.getElementById("time").textContent = `あと残り${t}秒です。`
// }

// const timerID = setInterval(function() {
//   elapsTime--
//   writeTime(elapsTime)
//   if (elapsTime === 0) {
//     alert("Time Up!")
//     clearInterval(timerID)
//   }
// }, 1000)

// ///////////////////
// // 三項演算子
// const num = 1

// // if (num >= 5) {
// //   console.log(`数字は${num}以上です。`)
// // } else {
// //   console.log(`数字は${num}未満です。`)
// // }

// let numResult = num >= 5 ? `数字は${num}以上です。` : `数字は${num}未満です。`
// document.getElementById("number").textContent = numResult

// // 複数の条件を1行で書ける。変数への代入を切り分けたりする場合に便利かもしれない。
// const num = 1

// let numResult = num >= 5 ? "数字は5以上です。" : num >= 3 ? "数字は3以上です。" : `数字は${num}です。`
// document.getElementById("number").textContent = numResult



// ///////////////////
// // アロー演算子
// // ・名前がない関数
// // ・変数に格納する。
// // ・オブジェクトのプロパティに格納する。
// // ・関数の引数にする。

// // 関数の定義法　その1
// function taxCal(price) {
//   return Math.floor(price * 1.1)
// }

// list_price = 100

// // console.log(taxCal(num))
// document.getElementById("test").textContent = taxCal(list_price)

// // 関数の定義法　その2 変数に格納する。
// // 関数に名前をつけずに定義する。
// const taxCal = function (price) {
//   return Math.floor(price * 1.1)
// }
// document.getElementById("test").textContent = taxCal(100)

// // アロー関数として定義する。
// // その1
// const taxCal = (price) => {
//   return Math.floor(price * 1.1)
// }
// document.getElementById("test").textContent = taxCal(100)

// // その2
// // 1行で書けるくらい処理が単純であれば、
// // {}を省略できる。
// // returnを省略できる。
// // 引数が一つば場（　）を省略できる。
// // で、完成形。
// const taxCal = price => Math.floor(price * 1.1)
// document.getElementById("test").textContent = taxCal(100)

// // その3
// // 引数を省略できる。
// const taxCal = () => Math.floor(100 * 1.1)
// document.getElementById("test").textContent = taxCal()


// ///////////////////
// // forEach

// const animals = ["犬", "猫", "狐", "虎"]
// // ---
// // for文を使う。
// // for (let i = 0; i < animals.length; i++) {
  // //   console.log(animals[i])
  // // }


// // とりあえずforEachでやってみる。=> createElement(), appendChild()
// animals.forEach(element => {
//   // コンソールで出力する。
//   console.log(element)
//   // リストで出力する。
//   let li = document.createElement("li")
//   li.textContent = element
//   document.querySelector("#animal").appendChild(li)
// });

// // ---
// // 生成するリスト要素をgetElementByIdを使いインスタンス化しておく
// const animals = ["犬", "猫", "狐", "虎"],
//       animalList = document.getElementById("animal")

// animals.forEach(element => {
//   // リストで出力する。
//   let li = document.createElement("li")
//   li.textContent = element
//   animalList.appendChild(li)
// })

// // ---
// // 何気にforEachってアロー関数を使っていることに気づく。
// const animals = ["犬", "猫", "狐", "虎"],
//   animalList = document.getElementById("animal")

// // 元々はfunction()
// animals.forEach(function(element) {
//   let li = document.createElement("li")
//   li.textContent = element
//   animalList.appendChild(li)
// });

// // アロー関数の形にしている。
// animals.forEach(element => {
//   let li = document.createElement("li")
//   li.textContent = element
//   animalList.appendChild(li)
// });

// // ---
// // forEachの引数は3つある。　element, index, array
// const animals = ["犬", "猫", "狐", "虎"],
//       animalList = document.getElementById("animal")

// animals.forEach((element, idx, arr) => {
//   let li = document.createElement("li")
//   li.textContent = element

//   if (idx + 1 === arr.length) {
//     let lastLi = document.createElement("li")
//     lastLi.textContent = "最後だけ無くす！"
//     animalList.appendChild(lastLi)
//   } else {
//     animalList.appendChild(li)
//   }
// })


// ///////////////////
// // テンプレート・リテラル
// const price = 1000,
//       text = "商品の価格"
// document.getElementById("output").textContent = `${text}は、${price}です。`


// ///////////////////
// for of

// // forEach　利点はインデックスを含めた複数の引数を扱える。
// const family = ["信之", "和恵", "茉李"],
//       familyUl = document.getElementById("list")

// family.forEach(name => {
  //   let liElem = document.createElement("li")
  //   liElem.textContent = name
  //   familyUl.appendChild(liElem)
// })

// // for of 配列の要素だけを処理する場合にいいのかも。でもforEachで十分かな？
// const family = ["信之", "和恵", "茉李"],
//       familyUl = document.getElementById("list")

// for (const name of family) {
  //   let liElem = document.createElement("li")
  //   liElem.textContent = name
  //   familyUl.appendChild(liElem)
  // }


// ///////////////////
// // reduce, reduceRight 合計を得る。
// // const sum = arr.reduce((previous, current, index) => previous + current)
// const arr = [10, 20, 30, 40, 50],
//       list = document.getElementById("value")
// const sum = arr.reduce((pre, cur, idx) => {
  //   let liElem = document.createElement("li")
  //   if (idx < arr.length - 1) {
    //     liElem.textContent = `${idx}回目の小計は${pre + cur}`
    //   } else {
      //     liElem.textContent = `合計は${pre + cur}`
      //   }
      //   list.appendChild(liElem)
      //   return pre + cur
      // })


// ///////////////////
// // filter関数　

// const members = [
//   {
//     position: "社長",
//     name: "佐藤",
//     age: 45,
//   },
//   {
//     position: "部長",
//     name: "鈴木",
//     age: 38,
//   },
//   {
//     position: "課長",
//     name: "高橋",
//     age: 35,
//   },
//   {
//     position: "係長",
//     name: "田中",
//     age: 30,
//   },
//   {
//     position: "社員",
//     name: "渡辺",
//     age: 23,
//   },
//   {
//     position: "社員",
//     name: "伊東",
//     age: 22,
//   }
// ]

// // 前準備　オブジェクトのデータをリスト形式で吐き出す方法。
// const memberList = document.getElementById("memberList"),
//       afterProcessingList = document.getElementById("afterProcessingList")

// members.forEach(member => {
//   const li = document.createElement("li")
//   li.textContent = `${member.position}: ${member.name}, ${member.age}歳`
//   memberList.appendChild(li)
// });

// // filterの使い方
// // ・filter関数で生成した配列を変数に収める。
// // ・オブジェクトにfilter関数を充てる。
// // ・filter関数へは、アロー関数で処理を作る。
// const filteredData = members.filter(member => {
//   // 複数行を書く場合はreturn必須。
//   return member.age >= 30
// })
// もちろん可能であれば1行で処理を書く。
// 条件　年齢が30歳以上であれば抽出する。
// const filteredData = members.filter(member => member.age >= 30)
// console.log(filteredData.length)

// // 名前に「藤」を含んでれれば抽出する。
// const filteredData = members.filter(member => member.name.includes("藤"))

// filteredData.forEach(member => {
//   const li = document.createElement("li")
//   li.textContent = `${member.position}: ${member.name}, ${member.age}歳`
//   afterProcessingList.appendChild(li)
// })

// // 前準備　オブジェクトのデータをリスト形式で吐き出す方法。
// const memberList = document.getElementById("memberList"),
//       afterProcessingList = document.getElementById("afterProcessingList")

// members.forEach(member => {
//   const li = document.createElement("li")
//   li.textContent = `${member.position}: ${member.name}, ${member.age}歳`
//   memberList.appendChild(li)
// })

// // some() 一つでも条件に当てはまっていればtrueを返す。
// // 40歳以上の社員がいたらtrueを返す。
// // 複数行
// const someData = members.some(member => {
//   return member.age >= 40
// })
// console.log(someData)

// // 1行
// console.log(someData)
// const someData = members.some(member => member.age >= 40)
// console.log(someData)

// // 特定の役職があればtrueを返す => 
// const someData = members.some(member => member.position.includes("社長"))
// console.log(someData)

// // 特定の条件に合致しば場合、コメントを返す。
// // ただ、これじゃない。
// const memberAge = 30,
//       filteredData = members.filter(member => member.age >= memberAge)

// if (members.some(member => member.age >= memberAge)) {
//   afterProcessingList.textContent = `${memberAge}歳以上の社員が${filteredData.length}名います。`
// }

// // every() 全ての条件に当てはまっていればtrueを返す。
// const memberAge = 24,
//       filteredData = members.filter(member => member.age <= memberAge)

// if (members.every(member => member.age >= memberAge)) {
//   afterProcessingList.textContent = `社員全員が${memberAge}歳以上で構成されている会社です。`
// } else {
//   afterProcessingList.textContent = `${memberAge}歳以下の社員が${filteredData.length}名います。`
// }


// /////////////////
// 配列をシャッフルする。pythonでは定義されている関数がJSにはない。=> arrSuffle()

// const members = [
//   {
//     position: "社長",
//     name: "佐藤",
//     age: 45,
//   },
//   {
//     position: "部長",
//     name: "鈴木",
//     age: 38,
//   },
//   {
//     position: "課長",
//     name: "高橋",
//     age: 35,
//   },
//   {
//     position: "係長",
//     name: "田中",
//     age: 30,
//   },
//   {
//     position: "社員",
//     name: "渡辺",
//     age: 23,
//   },
//   {
//     position: "社員",
//     name: "伊東",
//     age: 22,
//   }
// ]

// // 前準備　オブジェクトのデータをリスト形式で吐き出す方法。
// const memberList = document.getElementById("memberList"),
//   afterProcessingList = document.getElementById("afterProcessingList")

// members.forEach(member => {
//   const li = document.createElement("li")
//   li.textContent = `${member.position}: ${member.name}, ${member.age}歳`
//   memberList.appendChild(li)
// })

// function arrSuffle(array) {
//   // 配列をディープコピーする。
//   const arr = array.slice()
//   // console.log(arr)
//   // console.log(arr.reverse())

//   for (let idx = arr.length - 1; idx >= 0; idx--) {
//     const randomIdx = Math.floor(Math.random() * (idx + 1));
//     [arr[idx], arr[randomIdx]] = [arr[randomIdx], arr[idx]]
//     // console.log('arr', arr)
//   }
//   return arr
// }

// // console.log(arrSuffle(members))

// arrSuffle(members).forEach(member => {
//   const li = document.createElement("li")
//   li.textContent = `${member.position}: ${member.name}, ${member.age}歳`
//   afterProcessingList.appendChild(li)
// })


// /////////////////
// // 配列から条件に合うデータやindex（位置）を取得する。=> find, findIndex

// const members = [
//   {
//     position: "社長",
//     name: "佐藤",
//     age: 45,
//   },
//   {
//     position: "部長",
//     name: "鈴木",
//     age: 38,
//   },
//   {
//     position: "課長",
//     name: "高木",
//     age: 35,
//   },
//   {
//     position: "係長",
//     name: "田中",
//     age: 30,
//   },
//   {
//     position: "社員",
//     name: "渡辺",
//     age: 23,
//   },
//   {
//     position: "社員",
//     name: "高橋",
//     age: 22,
//   }
// ]

// // 前準備　オブジェクトのデータをリスト形式で吐き出す方法。
// const memberList = document.getElementById("memberList"),
//   afterProcessingList = document.getElementById("afterProcessingList")

// members.forEach(member => {
//   const li = document.createElement("li")
//   li.textContent = `${member.position}: ${member.name}, ${member.age}歳`
//   memberList.appendChild(li)
// })

// // find
// // array.find(element, index, array)

// // findは、条件が合致した最初の一つ目を見つける。数値で検索する場合。
// console.log(members.find(elememt => return elememt.age < 30)) 

// // 文字列で検索する場合。
// // 合致する。
// console.log(members.find(elememt => { return elememt.position === "係長" })) 
// ///// 注意 /////1行にする場合は『return』いらない。
// console.log(members.find(elememt => elememt.position === "係長")) 
// // 含む。
// console.log(members.find(elememt => elememt.name.includes("高"))) 

// // HTMLへリストで出力してみる。最初が合致した一人編
// const li = document.createElement("li")
// const matchMember = members.find(elememt => elememt.position === "係長")
// li.textContent = `条件が合致する最初のメンバーは、${matchMember.position}: ${matchMember.name}, ${matchMember.age}歳`
// afterProcessingList.appendChild(li)

// // // HTMLへリストで出力してみる。最初が合致した複数編
// let matchMember = members.filter(member => member.age >= 30)

// matchMember.forEach(member => {
//   const li = document.createElement("li")
//   li.textContent = `合致したメンバー${member.name}さん`
//   afterProcessingList.appendChild(li)
// })


// /////////////////
// // 連想配列 => Object.kyes, Object.values, Object.entries

// const fruits = {
  //   apple: 200,
  //   orange: 100,
  //   banana: 150,
  //   pear : 300
  // }

  // console.log(fruits.pear)
  // // => 300

  // console.log(Object.keys(fruits))
  // // => ['apple', 'orange', 'banana', 'pear']

  // console.log(Object.keys(fruits).includes("apple"))
  // // => true

  // // キーを出力する。
  // Object.keys(fruits).forEach(key => console.log(key))

  // // 値を出力する。
  // Object.keys(fruits).forEach(key => console.log(fruits[key]))

  // // そんなことをしないでも値は出せる。
  // console.log(Object.values(fruits))

  // // 連想配列をいい感じで処理するには『entries()』が良さげだ。
  // Object.entries(fruits).forEach(([key, value]) => {
    //   console.log("key:", key, "value:", value)
    // })


// /////////////////
// // 連想配列を操作する。 => for in
// const fruits = {
//   apple: 200,
//   orange: 100,
//   banana: 150,
//   pear : 300
// }

// // for in でキーを取り出し値を得る。
// for (const key in fruits) {
//   console.log(fruits[key])
// }

// // 合計する。
// let total = 0
// for (const key in fruits) {
//   total += fruits[key]
// }
// console.log(total)

// // キーだけの配列を生成させて forEachで回す。
// Object.keys(fruits).forEach(key => {
//   console.log(`${key}: ${fruits[key]}`)
// })

// // 連想配列に値が存在していたら ture を返す。
// for (const key in fruits) {
//   if (Object.hasOwnProperty.call(fruits, key)) {
//     const element = fruits[key];
//     console.log(element)
//   }
// }

// /////////////////
// for, forEach 文の中で使う、continue と break

// const li = document.querySelectorAll("li")

// // continue, return
// // forEachは、『continue』ではなく『return』
// // 『forEach内』で『return』すると、その時点で次のループへスキップされる。
// // つまり、例えば下のコードのように、
// // 内容に『テキスト』という文字が含まるもの『以外』の処理を変える場合に使う。
// li.forEach((element, idx) => {
//     if (element.textContent.includes("色付けしない")) return
//     element.style.color = "#fff"
//     element.style.backgroundColor = "red"
//   })

// // インデックス番号が『偶数』だったら処理をスルー（return => 入口に返して最初から。）する。
// // つまり、インデックスの奇数番号にスタイル付をする。
// li.forEach((element, idx) => {
//   if (idx % 2 === 0) return
//   element.style.color = "#fff"
//   element.style.backgroundColor = "#333"
// })

// // break
// for (let idx = 0; idx < li.length; idx++) {
//   if (idx === 5) break
//     li[idx].style.color = "#fff"
//     li[idx].style.backgroundColor = "#333"
// }


// /////////////////
// // 配列の順番を変える。=> sort

// let numArr = [3,5,2,1,4]
// console.log(numArr.sort())
// // => [1, 2, 3, 4, 5]

// let strArr1 = ["お", "い", "あ", "う", "え"]
// console.log(strArr1.sort())
// // => ['あ', 'い', 'う', 'え', 'お']

// let strArr2 = ["あいだ", "あいかわ", "あしだ", "あじろ", "あべ"]
// console.log(strArr2.sort())

// const members = [
//   {
//     position: "社長",
//     name: "和田",
//     ruby: "わだ",
//     age: 45,
//   },
//   {
//     position: "部長",
//     name: "明石",
//     ruby: "あかし",
//     age: 38,
//   },
//   {
//     position: "課長",
//     name: "高木",
//     ruby: "たかぎ",
//     age: 35,
//   },
//   {
//     position: "係長",
//     name: "田中",
//     ruby: "たなか",
//     age: 30,
//   },
//   {
//     position: "社員",
//     name: "木戸",
//     ruby: "きど",
//     age: 23,
//   },
//   {
//     position: "社員",
//     name: "村田",
//     ruby: "むらた",
//     age: 22,
//   }
// ]

// // 現状の配列をHTMLのList表示させる。
// members.forEach(element => {
//   const li = document.createElement("li")
//   li.textContent = `${ element.name }さん：${ element.position }, ${ element.age }歳`
//   document.getElementById("memberList").appendChild(li)
// });

// // 配列をシャッフルさせるためど独自関数を定義する。
// function arrSuffle(array) {
//   // 配列をディープコピーする。
//   const arr = array.slice()

//   for (let idx = arr.length - 1; idx >= 0; idx--) {
//     const randomIdx = Math.floor(Math.random() * (idx + 1));
//     [arr[idx], arr[randomIdx]] = [arr[randomIdx], arr[idx]]
//   }
//   return arr
// }

// // 一旦ここで配列をシャッフルする。
// arrSuffle(members).forEach(member => {
//   const li = document.createElement("li")
//   li.textContent = `suffled ${member.position}さん: ${member.name}, ${member.age}歳`
//   afterProcessingList.appendChild(li)
// })

// // sort 配列をsortさせる。結果は配列で返る。
// const resultArr = arrSuffle(members).sort((elemX, elemY) => {
//   //『数値』は、XとYを入れ替える。
//   // // 年齢（数値）を降順にソートする。=> Y - X
//   // return elemY.age - elemX.age

//   // // 年齢（数値）を昇順にソートする。=> X - Y
//   // return elemX.age - elemY.age
//   // return elemY.ruby > elemX.ruby

//   // // 『文字列』は不等号の向きを変える。
//   // // ふりがな（文字列）を降順にソートする。
//   // if (elemY.ruby > elemX.ruby) {
//   //   return 1
//   // } else {
//   //   return -1
//   // }

//   // ふりがな（文字列）昇順にソートする。
//   if (elemY.ruby < elemX.ruby) {
//     return 1
//   } else {
//     return -1
//   }
// })

// // 変更した配列データをリストへ反ささせる。
// resultArr.forEach(element => {
//   const li = document.createElement("li")
//   li.textContent = `${element.name}さん：${element.position}, ${element.age}歳`
//   document.getElementById("afterProcessingList").appendChild(li)
// })

// /////////////////
// // 文字（配列）を切り取って取得する。=> slice, substring

// const text = "一二三四五六七八九十"

// console.log(text)
// // 第一引数だけを書くと、
// // 下の場合、インデックス5番目の『i』それ以降の全ての文字列を取ってくる。
// console.log(text.slice(5))      // => 六七八九十
// console.log(text.substring(5))  // => 六七八九十

// // 第一、二引数を書くと、　
// // 下の場合、
// // インデックス5番目の『i』から
// // 最初から9番目まで文字列と取る。
// console.log(text.slice(5, 9))     // => 六七八九
// console.log(text.substring(5, 9)) // => 六七八九

// // slice()は、配列でも範囲の値『配列』で書き出せる。
// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(arr.slice(5, 10))
// // => [6, 7, 8, 9, 10]
// // // substring()は、配列に対応できない。
// // console.log(arr.substring(5, 10))
// // // => Uncaught TypeError: arr.substring is not a function

// // 第一引数 > 第二引数の場合
// console.log(text.slice(10, 5))
// // => 処理と通す（エラーにならない）が何も返ってこない。

// console.log(text.substring(7, 5)) // => 六七
// // => 小さい方を第一、大きい方を第二引数と解釈して処理してくれる。

// // 第二引数がマイナスの場合
// // マイナスはpythonと違う。
// // インデックス6番目から『後から1番目』の『前』までを選択する。
// console.log(text.slice(6, -1))     // => 七八九

// // 逆に処理する。
// // インデックス「-1 = 0」番目から、最初から6番ままでを選択する。
// console.log(text.substring(6, -1)) //=> 一二三四五六


// /////////////////
// // JSにおける配列の処理について。配列データの削除、挿入、差し替え => splice()
// // pythonでみているスライスと同じ挙動。これです。
// const members = [
//   {
//     position: "社長",
//     name: "和田",
//     ruby: "わだ",
//     age: 45,
//   },
//   {
//     position: "部長",
//     name: "明石",
//     ruby: "あかし",
//     age: 38,
//   },
//   {
//     position: "課長",
//     name: "高木",
//     ruby: "たかぎ",
//     age: 35,
//   },
//   {
//     position: "係長",
//     name: "田中",
//     ruby: "たなか",
//     age: 30,
//   },
//   {
//     position: "社員",
//     name: "木戸",
//     ruby: "きど",
//     age: 23,
//   },
//   {
//     position: "社員",
//     name: "村田",
//     ruby: "むらた",
//     age: 22,
//   }
// ]

// // 現状の配列をHTMLのList表示させる。
// members.forEach(element => {
//   const li = document.createElement("li")
//   li.textContent = `${element.name}さん：${element.position}, ${element.age}歳`
//   document.getElementById("memberList").appendChild(li)
// })

// // 削除する。
// // 第一引数が『一つ』=> インデックス番号3以降を削除した配列を返す。破壊的に。
// members.splice(3)

// // 第一引数のインデックス番号3から、第二引数し指定した2つ目までの要素を削除する。破壊的に。
// members.splice(3, 2)

// // 挿入する。
// // 第一引数のインデックス番号1の位置をマークして、その前に挿入する（第二引数が『挿入する』という意味のスイッチ）。破壊的に。
// // 第二引数が『0』 => 0個削除する。=> 挿入する。
// // 第3以降いくらでもオブジェクトを設置できる。
// members.splice(0, 0, 
//   {
//     position: "社員",
//     name: "高田",
//     ruby: "たかだ",
//     age: 57
//   },
//   {
//     position: "社員",
//     name: "南野",
//     ruby: "みなみの",
//     age: 59
//   },
//   {
//     position: "社員",
//     name: "林",
//     ruby: "はやし",
//     age: 35
//   })

// // 最初に追加は『0』でできる。
// // 最後に追加は？ spliceでは無理なよう。
// // 配列の最後にオブジェクトを追加する。
// members.push(
//   {
//     position: "社員",
//     name: "高広",
//     ruby: "たかひろ",
//     age: 57
//   })

// // 差し替え
// members.splice(1, 1, {
//   position: "社員",
//   name: "高広",
//   ruby: "たかひろ",
//   age: 57
// })

// // 変更した配列データをリストへ反映させる。
// members.forEach(element => {
//   const li = document.createElement("li")
//   li.textContent = `${element.name}さん：${element.position}, ${element.age}歳`
//   document.getElementById("afterProcessingList").appendChild(li)
// }) 

// /////////////////
// カスタムデータ属性（data-elemetName）—クリックに反応して背景の色を変更する。=> dataset

// // JSで要素を追加し、datasetを効かせる。
// const newList = document.createElement("li")
// newList.textContent = "Color List4"
// newList.dataset.color = "green"
// document.querySelector(".colorList").appendChild(newList)

// const colorList = document.querySelectorAll(".colorList li"),
//       preview = document.querySelector(".preview")

// // HTMLで設定したカスタムデータの属性を取得する。　
// // こんな風に略ししている感じで覚える。
// // < li data-color="red" >
// // (data) + (-) + (color) => data_set.color 
// colorList.forEach(element => {
//   console.log(element.dataset.color)
//   element.addEventListener("click", () => {
//     const color = element.dataset.color
//     preview.style.backgroundColor = color
//     preview.textContent = color
//   })
// })


// /////////////////
// // a要素のhref属性が『http』の値を含むものを配列に格納する。
// // 正規表現「的」な書き方
// // ^（先頭）がhttpから始ま（＝イコールである）『a要素』
// const targetLi = document.querySelectorAll("header a[href^=http]")
// console.log(targetLi)

// targetLi.forEach(element => {
//   element.setAttribute("target", "_blank")
// })


// // /////////////////
// // タグ挿入をJSで操作する。=> insertAdjacentHTML

// const main = document.querySelector("main"),
//       head3 = document.createElement("h3")

// // ターゲットにしている『要素の前・後』に新たに要素を追加する。
// main.insertAdjacentHTML('beforebegin', '<div class="red">前の最初</div>')
// main.insertAdjacentHTML('afterend', '<div class="orange">後の最後</div>')

// // ターゲットにしている『要素の内側』の『最初・最後』に新たに要素を追加する。
// main.insertAdjacentHTML('afterbegin', '<div class="green">後の最初</div>')
// main.insertAdjacentHTML('beforeend', '<div class="blue">前の最後</div>')


// 要素を挿入 => appendChild, before, after
const main = document.querySelector("main"),
      pgh = document.createElement("p")

pgh.textContent = "hello, hello, hello!"
// appendChild　指定した要素の子要素、その一番最後に追加する。
main.appendChild(pgh)

// const head2 = document.querySelector("main h2"),
//       divBefore = document.createElement("div.before"),
//       divAfter = document.createElement("div.after")
// console.log(head2)
// divBefore.textContent = "h2の『前』に文章を挿入する。"
// divAfter.textContent = "h2の『後』に文章を挿入する。"

// head2.before(divBefore)
// head2.after(divAfter)
