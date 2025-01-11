const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const T = input.shift();
const answer = [];

function makeFibonacciNums(N) {
  const fibArr = [0, 1];
  while (fibArr[fibArr.length - 1] < N) {
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
  }
  return fibArr;
}

for (let i = 0; i < T; i++) {
  let line = [];
  let number = input[i];

  const arr = makeFibonacciNums(number);
  while (number > 0) {
    if (number >= arr[arr.length - 1]) {
      number -= arr[arr.length - 1];
      line.push(arr[arr.length - 1]);
    }
    arr.pop();
  }

  answer.push(line.sort((a,b)=>a-b).join(' '));
}

console.log(answer.join('\n'));