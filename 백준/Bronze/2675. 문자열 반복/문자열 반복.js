const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = [];

input.map((e) => {
  let answer = '';
  if (e.length > 2) {
    const renum = e.split(' ')[0];
    const str = e.split(' ')[1].split('');

    str.map(s => answer += s.repeat(renum))
  }
  answer != '' && arr.push(answer.trim());
})

console.log(arr.join('\n'));