const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const N = Number(input);

const Q = Array.from({ length: N }, (_, i) => i + 1);
let idx = 0;

while (idx < Q.length -1) {
  if (idx % 2 === 0) idx++;
  else Q.push(Q[idx++]);
}

console.log(Q[idx]);
