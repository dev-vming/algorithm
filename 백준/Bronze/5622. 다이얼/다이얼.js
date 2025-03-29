const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let answer = 0;
const arr = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
for (let i = 0; i < input.length; i++){
  for (let j = 0; j < arr.length; j++){
    if (arr[j].includes(input[i])) {
      answer += j + 3;
      break;
    }
  }
}
console.log(answer);
