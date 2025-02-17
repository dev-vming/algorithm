function solution(s) {
    let answer = false;
    const len = s.length;
    if(len===4 || len===6){
        let cnt = 0;
        for(let i=0; i<len; i++){
            if(!isNaN(+s[i])) cnt++;
        }
        if(len === cnt) answer = true;
    }
    return answer;
}