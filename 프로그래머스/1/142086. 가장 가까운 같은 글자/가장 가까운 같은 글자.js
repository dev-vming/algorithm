function solution(s) {
    let answer = [];
    let string = '';
    for(let i = 0; i<s.length; i++){
        if(string.lastIndexOf(s[i])===-1){
            answer.push(string.lastIndexOf(s[i]));
            string += s[i];
        } else {
            answer.push(i-string.lastIndexOf(s[i]));
            string += s[i];
        }
    }
    return answer;
}