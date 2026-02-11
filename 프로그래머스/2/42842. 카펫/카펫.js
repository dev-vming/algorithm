function solution(brown, yellow) {
    // 1부터 노랑의 제곱근까지 탐색하면서 세로 가정
    for(let h=1; h<=Math.sqrt(yellow); h++){
        
        // 현재 세로가 약수라면
        if(yellow % h === 0){
            // 노랑의 가로
            const w = yellow / h;
            // 전체 넓이 가정
            const area = (w+2)*(h+2);
            
            // 가정한 전체 넓이가 갈색과 노란색의 합과 같다면 정답
            if(area === brown+yellow){
                return [w+2, h+2];
            }
        }
    }
}