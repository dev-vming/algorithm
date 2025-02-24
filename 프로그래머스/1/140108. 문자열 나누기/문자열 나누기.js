function solution(s) {
    let str = s;
    var answer = 0;
    let x = '';
    let xCnt = 0;
    let diffCnt = 0;
    for(let i=0; i<s.length; i++){
        x = str[0];
        x===s[i] ? xCnt++ : diffCnt++;
        if(xCnt===diffCnt){
            str = s.slice(i+1);
            answer++;
            continue;
        } else {
            i===s.length-1 && answer++;
        }
        
        
    }
    return answer;
}