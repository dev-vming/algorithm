const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const N = Number(input);
console.log("long ".repeat(N / 4)+"int");