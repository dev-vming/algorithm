function solution(s, n) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    let answer= '';

    for(let i = 0; i < s.length; i++){
        const text = s[i];
        if(text === ' ') {
            answer += ' '; 
            continue;
        }
        const textType = upper.includes(text) ? upper : lower;
        let index = textType.indexOf(text)+n;
        if(index >= textType.length) index -= textType.length;
        answer += textType[index];
    }
    return answer;
}