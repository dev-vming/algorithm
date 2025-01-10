const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let [A, B] = input.split(' ').map(Number);
let cnt = 0;

while (B>0) {
  if (B % 10 === 1) {
    B = Math.floor(B / 10);
    cnt++;
  } else {
    B /= 2;
    cnt++;
  }

  if (A === B) break;
}

console.log(A === B ? cnt + 1 : -1);