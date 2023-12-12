function solution(a, b, c, d) {
    const maxValue = Math.max(a,b,c,d); // 가장 큰 수
    const minValue = Math.min(a,b,c,d); // 가장 작은 수
    
    let maxCount = 0; // 가장 큰 수의 공통 개수
    let minCount = 0; // 가장 작은 수의 공통 개수
    
    const arr = [a,b,c,d]; // 주사위 값을 배열화
    
    arr.forEach((el)=>{
        // 각각의 요소가 가장 큰 수랑 같으면 maxCount++
        if(el === maxValue){
            maxCount++
        }
        // 각각의 요소가 가장 작은 수랑 같으면 minCount++
        else if(el === minValue){
            minCount++
        }
    })
    
    // 4개가 동일
    // maxCount나 minCount 둘중 하나 아무거나 4가 나오면 4개가 전부 동일한 값임
    if(maxCount === 4){
        return 1111 * maxValue;
    }
    
    // 3개가 동일
    // maxCount가 3이면 나머지 minValue가 나머지 다른 값이 됨
    if(maxCount === 3){
        return (10 * maxValue + minValue) * (10 * maxValue + minValue);
    }
    // minCount가 3이면 나머지 maxValue가 나머지 다른 값이 됨
    if(minCount === 3){
        return (10 * minValue + maxValue) * (10 * minValue + maxValue);
    }
    
    // 2개씩 한쌍의 같은 값
    // maxCount랑 minCount가 각각 전부 2가 나와야 2개씩 한쌍의 같은 값임을 알 수 있음
    if(maxCount === 2 && minCount === 2){
        return (maxValue + minValue) * Math.abs(maxValue - minValue); // Math.abs() <= 절댓값 구하는 메소드
    }
    
    // 2개
    // 같은 값 두개를 제외한 나머지 각각의 값을 곱해야 하는 문제기 때문에, 따로 선언한 변수를 사용할 필요가 없음
    if(a === b){
        return c * d;
    }
    if(a === c){
        return b * d;
    }
    if(a === d){
        return b * c;
    }
    if(b === c){
        return a * d;
    }
    if(b === d){
        return a * c;
    }
    if(c === d){
        return a * b;
    }
    
    // 나머지 경우인 전부 다른 값일 때, 가장 작은 값을 리턴
    return minValue;
}