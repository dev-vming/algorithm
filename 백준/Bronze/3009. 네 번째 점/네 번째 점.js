const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n').map((n)=>n.split(' ').map((Number)));

const xArr = input.map((d) => d[0]).sort();
const yArr = input.map((d) => d[1]).sort();
const x = xArr[0] === xArr[1] ? xArr[2] : xArr[0];
const y = yArr[0] === yArr[1] ? yArr[2] : yArr[0];
console.log(`${x} ${y}`);