function solution(arr, queries) {
    for(let i =0; i<queries.length; i++){
        for (let s=queries[i][0]; s<=queries[i][1]; s++){
            arr[s]++;
        }
    }
    return arr;
}