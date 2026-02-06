function solution(keymap, targets) {
    const minPush = {};
    
    // 문자별로 눌러야하는 최소 횟수 확인
    for(const key of keymap){
        for(let i = 0 ; i < key.length; i++){
            const char = key[i];
            const pushCount = i + 1;
            
            // 확인된 최소 횟수가 없거나 현재 눌러야하는 수보다 크다면 갱신
            if(minPush[char] === undefined || minPush[char] > pushCount){
                minPush[char] = pushCount;
            }
        }
    }
    
    // 타겟 글자의 최소 횟수 확인
    const answer = targets.map(target => {
        let sum = 0;
        
        for(const char of target){
            // 만약 해당 글자가 없다면 -1 반환
            if(minPush[char] === undefined){
                return -1;
            }
            // 해당 글자가 있다면 눌러야 하는 횟수에 최소 횟수 추가
            sum += minPush[char];
        }
        return sum;
    })
    
    return answer;
}