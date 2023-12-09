function solution(arr, queries) {
    for (query of queries){
        let [i,j] = [ query[0], query[1] ];
        [arr[i],arr[j]] = [arr[j],arr[i]];
    }
    return arr;
}