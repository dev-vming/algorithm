function solution(s, skip, index) {
    let answer = '';
    
    for(const c of s){
        // 이동 횟수
        let count = 0;
        // 문자를 아스키 코드로 변환
        let code = c.charCodeAt();
        
        while(count < index){
            code++;
            
            // 코드가 z를 넘기면 a로 이동
            if(code > 122) code = 97;
            
            // 현재 코드가 skip에 포함되지 않는다면 이동 횟수 체크
            if(!skip.includes(String.fromCharCode(code))) count++;
        }
        
        answer += String.fromCharCode(code);
    }
    
    return answer;
}