function solution(N, stages) {
    // 스테이지 별 실패율
    const failureRate = [];
    // 사용자 수 : 초기에는 전체 사용자 수
    let players = stages.length;
    
    // 스테이지별 실패율 계산
    for(let i=0; i<N; i++){
        // 해당 스테이지 도전자 수
        const challenger = stages.filter((stage)=>stage === i+1).length;
        // 계산한 실패율을 push
        failureRate.push({stage:i+1, rate:challenger/players});
        // 사용자 수에서 이전 단계 도전자 수를 제외하기 위함
        players -= challenger;
    }
    
    // 정답 계산
    const answer = failureRate.sort((a,b)=>{
        if(a.rate !== b.rate){
            return b.rate - a.rate;
        }else {
            return a.stage - b.stage;
        }
    }).map((v)=>v.stage);
    
    return answer;
}