const input = require("fs").readFileSync("/dev/stdin").toString();
let n = Number(input);
let answer = 0;

while (n) {
  answer += n;
  n--;
}

console.log(answer);