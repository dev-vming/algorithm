function solution(n) {
    let answer = 0;
    for(let i=1;i<n;i++){
        if(n%i===1) answer = i;
        if(answer!==0)break;
    }
    return answer;
}