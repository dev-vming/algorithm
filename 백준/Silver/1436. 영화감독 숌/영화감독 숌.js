const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let N = 0;
let number = 666;

while (true) {
  if (String(number).includes('666')) {
    N++;
    if (N === Number(input)) {
      break;
    }
  }
  number++;
}

console.log(number);
