function solution(survey, choices) {
    // 유형별 점수
    const scores = {R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A:0, N: 0};
    // 지표 타입
    const types = [
        ["R", "T"],
        ["C", "F"],
        ["J", "M"],
        ["A", "N"],
    ];
    // 정답
    let answer = "";

    // 문항별 점수 계산
    for(let i=0; i<survey.length; i++){
        const [left, right] = survey[i];
        
        if (choices[i] < 4) {
            scores[left] += 4 - choices[i];
        } else if (choices[i] > 4) {
            scores[right] += choices[i] - 4;
        }
    }
    
    // 타입 정의
    for (const [a, b] of types) {
        answer += scores[b] > scores[a] ? b : a;
    }
        
    return answer;
}