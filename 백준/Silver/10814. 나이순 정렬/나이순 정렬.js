const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
input.shift();

const member = input.sort((a,b)=>a.split(' ')[0]-b.split(' ')[0])

console.log(member.join('\n'))