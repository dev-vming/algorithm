function solution(answers) {
    // 문제 푸는 방식
    const methods = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    
    // 각 방식의 점수 계산
    const grades = methods.map((method)=>{
        let grade = 0;
        for(let i=0; i<=answers.length; i++){
        if(answers[i]===method[i%method.length]) grade++;
        }
        return grade;
    })
    
    // 가장 높은 점수 확인
    const maxGrade = Math.max(...grades);
    
    // 정답
    const answer = [];
    grades.map((grade,idx)=>{
        if(maxGrade===grade) answer.push(idx+1);
    });
    
    return answer;
}
