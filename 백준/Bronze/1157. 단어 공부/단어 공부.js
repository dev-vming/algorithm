const input = require("fs").readFileSync("/dev/stdin").toString().toUpperCase();

let list = new Array(26).fill(0);

for (let i = 0; i < input.length; i++){
  list[input[i].charCodeAt() - 65]++;
}

const maxNum = Math.max(...list);
const maxCount = list.filter((v) => v === maxNum);
const answer = maxCount.length > 1 ? '?' : String.fromCharCode(list.findIndex(e=>e===maxNum)+65);

console.log(answer);