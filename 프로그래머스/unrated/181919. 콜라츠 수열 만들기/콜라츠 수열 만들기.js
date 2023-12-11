function solution(n) {
    var answer = [];
    let i = n;
    while(i>1){
        if(i%2===0) {
            answer.push(i);
            i = i/2;
        } else if(i%2 !== 0) {
            answer.push(i);
            i = 3 * i + 1;
        } 
    } answer.push(i);
    return answer;
}