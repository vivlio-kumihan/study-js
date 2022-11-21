///////////////////
// form

// 入力した値を出力する。

// 無名関数を使っている意味は、多分、htmlタグの属（変数）として指定できるかと推測する。
// 入力の値と取り出たためには、formから（buttomをクリックして）submitさせる仕組が必要だす推測する。
// あと、formから入さされるものの種類別に書きががある。
//   ex)
//     querySelector("input[type=submit]")
//     querySelector("input[name=input-area_name])
//     querySelector("select[name=select-area_name]")
//     querySelector("input[name=radio-button-select]:checked")

const showInput = () => {
  const inPut = document.getElementById("in-put").value;
  const outPut = "入力された文字は、" + inPut + "です。"
  document.getElementById("out-put").textContent = outPut;
}