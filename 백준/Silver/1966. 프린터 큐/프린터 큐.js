const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const cases = Number(input.shift());
const queue = input.map(v => v.split(' ').map(Number));

for (let i = 0; i < cases*2; i+=2){
  let [N, M] = queue[i];
  const importance = queue[i + 1];
  let count = 1;
  
  while (true) {
    const cur = importance.shift();
    if (cur < Math.max(...importance) && M == 0) {
      importance.push(cur);
      M = importance.length - 1;
    } else if (cur < Math.max(...importance)) {
      importance.push(cur);
      M--;
    } else if (cur >= Math.max(...importance) && M == 0) {
      console.log(count);
      break;
    } else if(cur >= Math.max(...importance)){
      count++;
      M--;
    }
  }
}