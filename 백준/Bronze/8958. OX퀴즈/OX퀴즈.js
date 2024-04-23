const input = require("fs").readFileSync("/dev/stdin").toString().split('\n');
const len = input.shift();

for (let i = 0; i < len; i++){
  let count = 0;
  let score = 0;
  for (let j = 0; j < input[i].length; j++){
    if (input[i][j] === 'O') {
      count++
    } else {
      count = 0;
    }
    score += count;
  }
  console.log(score);
}