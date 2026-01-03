const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
const [jaehwan, doctor] = input;

if (jaehwan.length >= doctor.length) {
    console.log('go');
} else console.log('no');