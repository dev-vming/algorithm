const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(v=>v.split(' '));

const [N] = input.shift();
const stack = [];

for (let i = 0; i < N; i++) {
  if (input[i][0] === 'push') {
    stack.push(input[i][1])
  } else if (input[i][0] === 'pop') {
    if (stack.length === 0) {
      console.log('-1');
    } else {
      console.log(stack[stack.length - 1]);
      stack.pop();
    }
  } else if (input[i][0] === 'size') {
    console.log(stack.length);
  } else if (input[i][0] === 'empty') {
    stack.length === 0 ? console.log('1') : console.log('0');
  } else if (input[i][0] === 'top') {
    if (stack.length === 0) {
      console.log('-1');
    } else {
      console.log(stack[stack.length - 1]);
    }
  }
}
