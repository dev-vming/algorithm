const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let K = Number(input);

let A = 1;
let B = 0; 

for (let i = 1; i <= K; i++) {
    const nextA = B;
    const nextB = A + B;

    A = nextA;
    B = nextB;
}

console.log(`${A.toString()} ${B.toString()}`); 