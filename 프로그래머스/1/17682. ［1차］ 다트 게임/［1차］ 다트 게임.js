function solution(dartResult) {
    // 라운드별 점수들
    const scores = [];
    // 문자열 검사할 정규표현식
    const regex = /(\d{1,2})([SDT])([*#]?)/g;
    // 문자열 검사 결과 ( ['1S*','1','S','*'] 형식 )
    let match;

    while ((match = regex.exec(dartResult)) !== null) {
        // 세트문자열, 점수, 보너스, 옵션
        let [_, score, bonus, option] = match;
        // 점수를 숫자로 변환
        score = Number(score);

        // 보너스 계산 (거듭제곱)
        if (bonus === 'D') score **= 2;
        if (bonus === 'T') score **= 3;

        // 옵션 계산
        if (option === '*') {
            score *= 2;
            // 이전 점수가 있다면 이전 점수에도 스타상 효과 적용
            if (scores.length) scores[scores.length - 1] *= 2;
        }
        if (option === '#') {
            score *= -1;
        }

        // 보너스와 옵션 적용된 점수 저장
        scores.push(score);
    }

    // 모든 점수의 합 계산
    return scores.reduce((a, b) => a + b, 0);
}
