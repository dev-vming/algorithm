function solution(arr, intervals) {
    const [a1, a2] = intervals[0];
    const [b1, b2] = intervals[1];
    
    const arr1 = arr.slice(a1, a2+1);
    const arr2 = arr.slice(b1, b2+1);
    
    return arr1.concat(arr2);
}