const textDiv = document.querySelector(".text-submit");
const textForm = textDiv.querySelector("form");
const textInput = textForm.querySelector("input");
const gameResult = document.querySelector(".game-result");
let nextAttack = "";

function checkDic(value) {
  fetch(
    `https://opendict.korean.go.kr/api/search?certkey_no=2849&key=C29443A68DF102A4384A97D701358D4A&target_type=search&part=word&q=${value}&sort=popular&start=1&num=10&advanced=y&target=1&method=exact&type1=word&pos=1`
  )
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(data, "text/xml");
      let totalNum = xmlDoc.getElementsByTagName("total")[0].innerHTML;

      if (totalNum === "0") {
        gameResult.innerHTML = "You Lose!";
      } else {
        gameResult.innerHTML = "GoGo!";
        console.log(xmlDoc.getElementsByTagName("word")[0].innerHTML);
        console.log(xmlDoc.getElementsByTagName("definition")[0].innerHTML);
        localStorage.setItem("")
        return value.slice(-1);
      }
    });
}

textForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userAns = textInput.value;
  textInput.value = "";
  nextAttack = checkDic(userAns);
});
