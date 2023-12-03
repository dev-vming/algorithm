const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    let answer = "";
    
    const upperCase = str.toUpperCase();
    const lowerCase = str.toLowerCase();
    
    for (let i=0 ; i<str.length; i++) {
        if (str[i] === upperCase[i] ){
            answer += str[i].toLowerCase();
        } else {
            answer += str[i].toUpperCase();
        }
    }
    console.log(answer);
});
