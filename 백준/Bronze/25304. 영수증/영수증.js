const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const X = Number(input.shift());
const N = Number(input.shift());
const arr = input.map(v=>v.split(' ').map(Number));

const cost = arr.reduce((acc, cur) => {
    const [a, b] = cur;
    return acc + a * b;
}, 0);

cost === X ? console.log('Yes') : console.log('No');