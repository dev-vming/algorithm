let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let count = 0;

while (true) {
  if (input % 5 === 0) {
    count += Math.floor(input / 5);
    console.log(count);
    break;
  }

  if (input < 0) {
    console.log(-1);
    break;
  }

  input -= 3;
  count++;
}
