const [A, B] = require("fs").readFileSync("/dev/stdin").toString().split(' ');

function sangsu(s) {
  return Number(s[2] + s[1] + s[0]);
}

console.log(Math.max(sangsu(A), sangsu(B)));