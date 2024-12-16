const input = require("fs").readFileSync("/dev/stdin").toString().split('\n');

const N = input.shift();
const answer = new Array(Number(N)).fill(1);


const bodySize = input.map(v => v.split(' ').map(Number));

for (let i = 0; i < N; i++){
  for (let j = 0; j < N; j++){
    if (i !== j) {
      if (bodySize[i][0] < bodySize[j][0] && bodySize[i][1] < bodySize[j][1]) {
        answer[i]++;
      } 
    }
  }
}

console.log(answer.join(' '));