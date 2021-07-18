const word = "나";
const random = Math.random() * 100 + 1;
const start = Math.floor(random);
console.log(start);
fetch(
  `https://opendict.korean.go.kr/api/search?certkey_no=2849&key=C29443A68DF102A4384A97D701358D4A&target_type=search&part=word&q=%EB%82%98&sort=popular&start=${start}&num=10&advanced=y&target=1&method=start&type1=word&pos=1&letter_s=2&letter_e=4&type3=general`
)
  .then(function (res) {
    return res.text();
  })
  .then(function (data) {
    let parser = new DOMParser();
    xmlDoc = parser.parseFromString(data, "text/xml"); //string을 파싱함 xml의 text 부분을
    let itemList = xmlDoc.getElementsByTagName("word");
    let defList = xmlDoc.getElementsByTagName("definition");
    for (let i in defList) {
      console.log(defList[i].innerHTML);
    }
    for (let i in itemList) {
      console.log(itemList[i].innerHTML);
      // console.log(senseList[i].childNodes[7].innerHTML);
    }
  });
