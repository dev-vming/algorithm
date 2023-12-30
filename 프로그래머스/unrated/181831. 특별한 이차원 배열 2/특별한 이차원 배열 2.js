function solution(arr) {
    let answer = 0;
    for(let i = 0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            arr[i][j] !== arr[j][i] ? answer+=1 : answer+=0
        }
    }
    return answer>0 ? 0 : 1;
}