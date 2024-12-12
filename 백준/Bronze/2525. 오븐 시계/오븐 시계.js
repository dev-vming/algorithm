const input = require("fs").readFileSync("/dev/stdin").toString().split('\n');

let H = Number(input[0].split(' ')[0]);
let M = Number(input[0].split(' ')[1])+Number(input[1]);

while (M >= 60) {
  M -= 60;
  H++;
  if (H >= 24) H %= 24;
}

console.log(H + ' ' + M);