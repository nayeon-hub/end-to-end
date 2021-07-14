const span = document.querySelector("span");

function getWord(w) {
  fetch(
    "https://krdict.korean.go.kr/api/search?certkey_no=2852&key=5B0BD56A57089255852AA443695F2796&type_search=search&method=WORD_INFO&part=word&q=%EB%82%98&sort=dict"
  ).then(function (response) {
    console.log(response);
    span.innerText = reponse;
  }); //응답을 파싱해서 JSON으로 변경함
  // .then(function (json) {
  //   span.innerText = `${json}`;
  // });
}

function Xml() {
  var xmlHttp = new XMLHttpRequest(); //xml 요청을 받을 변수를 선언해서 만든다.

  xmlHttp.open(
    "GET",
    "https://krdict.korean.go.kr/api/search?certkey_no=2852&key=5B0BD56A57089255852AA443695F2796&type_search=search&method=WORD_INFO&part=word&q=%EB%82%98&sort=dict",
    false
  ); //open함수로 xml문서를 받아온다.

  xmlHttp.send(null);

  console.log("XML", xmlHttp); //로그를 찍어 잘 받아왔는지 확인.
}

function init() {
  Xml();
}

init();
