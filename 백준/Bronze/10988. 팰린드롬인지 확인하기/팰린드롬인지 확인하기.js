const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const reversedStr = input.split('').reverse().join('');
if (input === reversedStr) console.log(1);
else console.log(0);