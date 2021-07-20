const startBtn = document.querySelector(".puzzle-control");
const answer = [1, 2, 3, 4, 5, 6, 7, 8];

function madeQus() {
  let li = [];
  while (li.length < 8) {
    const n = Math.floor(Math.random() * 8) + 1;
    const check = li.indexOf(n);
    if (check === -1) {
      li.push(n);
    }
  }
  return li;
}
console.log(madeQus());
