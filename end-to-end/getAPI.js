const word = "나";
const random = Math.random() * 100;
const start = Math.floor(random);
console.log(start);
fetch(
  `https://opendict.korean.go.kr/api/search?certkey_no=2849&key=${API_KEY}&target_type=search&part=word&q=${word}&sort=popular&start=${start}&num=100`
)
  .then(function (res) {
    return res.text();
  })
  .then(function (data) {
    let parser = new DOMParser();
    xmlDoc = parser.parseFromString(data, "text/xml"); //string을 파싱함 xml의 text 부분을
    console.log(xmlDoc.getElementsByTagName("sense"));
    console.log(Array.isArray(xmlDoc));
  });
