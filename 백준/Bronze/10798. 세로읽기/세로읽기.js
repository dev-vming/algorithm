const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');

const maxLen = Math.max(...input.map(line => line.length)); 
let answer = '';

for (let i = 0; i < maxLen; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i] !== undefined) { 
      answer += input[j][i];
    }
  }
}

console.log(answer);