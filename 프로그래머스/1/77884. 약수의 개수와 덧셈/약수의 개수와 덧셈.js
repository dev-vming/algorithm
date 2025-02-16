function solution(left, right) {
    let answer = 0;
    for(let i=left; i<=right; i++){
        countDivisor(i)%2 ? answer -= i : answer += i;
    }
    return answer;
}
    
function countDivisor(n){
    let cnt = 0;
    for(let i=1; i<=n; i++){
        if(n%i===0) cnt++;
    }
    return cnt;
}