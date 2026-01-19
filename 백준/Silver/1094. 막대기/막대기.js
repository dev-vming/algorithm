const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const X = Number(input);

const binary = X.toString(2);
let count = 0;

for (const bit of binary) {
    if (bit === "1") count++;
}

console.log(count);