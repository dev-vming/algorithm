const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let sum = 0
let cnt = 0;

while (sum < input) {
  cnt++;
  sum += cnt;
  if (sum > input) cnt--;
}

console.log(cnt);