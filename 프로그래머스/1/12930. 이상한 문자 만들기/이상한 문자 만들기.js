function solution(s) {
    let textIdx = 0;
    let answer = "";
    for(let i=0; i<s.length; i++){
        if(s[i]===" ") {
            answer += " ";
            textIdx = 0;
        } else {
            if(textIdx===0 || textIdx%2===0){
                answer += s[i].toUpperCase();
            } else {
                answer += s[i].toLowerCase();
            }
            textIdx++;
        }
    }
    return answer;
}