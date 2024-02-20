const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
input.shift();

input.map(s => console.log(s.trim()[0] + s[s.trim().length - 1]));