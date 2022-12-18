//////////////////////////////////////////////////
// 配列
// 配列をシャッフルする。pythonでは定義されている関数がJSにはない。=> arrSuffle()

const members = [
  {
    position: "社長",
    name: "佐藤",
    age: 45,
  },
  {
    position: "部長",
    name: "鈴木",
    age: 38,
  },
  {
    position: "課長",
    name: "高橋",
    age: 35,
  },
  {
    position: "係長",
    name: "田中",
    age: 30,
  },
  {
    position: "社員",
    name: "渡辺",
    age: 23,
  },
  {
    position: "社員",
    name: "伊東",
    age: 22,
  }
]

// 前準備　オブジェクトのデータをリスト形式で吐き出す方法。
const memberList = document.getElementById("member-list"),
  afterProcessList = document.getElementById("after-process-list")

members.forEach(member => {
  const li = document.createElement("li")
  li.textContent = `${member.position}: ${member.name}, ${member.age}歳`
  memberList.appendChild(li)
})

function arrSuffle(array) {
  // 配列をディープコピーする。
  const arr = array.slice()
  // console.log(arr)
  // console.log(arr.reverse())

  for (let idx = arr.length - 1; idx >= 0; idx--) {
    const randomIdx = Math.floor(Math.random() * (idx + 1));
    [arr[idx], arr[randomIdx]] = [arr[randomIdx], arr[idx]]
    // console.log('arr', arr)
  }
  return arr
}

// console.log(arrSuffle(members))

arrSuffle(members).forEach(member => {
  const li = document.createElement("li")
  li.textContent = `${member.position}: ${member.name}, ${member.age}歳`
  afterProcessList.appendChild(li)
})