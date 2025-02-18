function solution(arr1, arr2) {
    const answer = arr1.map((arr,idx)=>{
        return arr.map((n,i)=>{
            return n += arr2[idx][i];
        })
    })
    return answer;
}