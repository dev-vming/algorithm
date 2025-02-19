function solution(n) {
    let ternary = '';
    let answer = 0;
    while(n>0){
        ternary += parseInt(n%3);
        n = parseInt(n/3);
    }
    const reverseT = ternary.split('').reverse().join('');
    for(let i=0; i<reverseT.length; i++){
        answer += reverseT[i]*Math.pow(3,i);
    }
    return answer;
}