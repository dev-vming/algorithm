const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let answer = '';

for (let i = 0; i < input.length; i++){
  input[i] === input[i].toLowerCase()
    ? answer += input[i].toUpperCase()
    : answer += input[i].toLowerCase();
}

console.log(answer);
