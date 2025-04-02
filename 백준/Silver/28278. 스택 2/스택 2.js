const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const N = +input.shift();
const arr = input.map((line) => line.split(" ").map(Number));

const stack = []; 
let answer = []; 

for (let i = 0; i < N; i++) {
  switch (arr[i][0]) {
    case 1:
      stack.push(arr[i][1]); 
      break;
    case 2:
      if (stack.length) answer.push(stack.pop());
      else answer.push(-1); 
      break;
    case 3:
      answer.push(stack.length); 
      break;
    case 4:
      if (stack.length) answer.push(0);
      else answer.push(1); 
      break;
    case 5:
      if (stack.length) answer.push(stack[stack.length - 1]);
      else answer.push(-1); 
      break;
  }
}

console.log(answer.join('\n'));