const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const T = Number(input.shift());

for (let i = 0; i < T; i++){
    const strs = input[i].split(' ');
    const reversed = strs.map(str => str.split('').reverse().join('')).join(' ');

    console.log(reversed);
}
