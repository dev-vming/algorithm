function solution(arr) {
    const s_idx = arr.indexOf(2);
    const e_idx = arr.lastIndexOf(2);
    
    return s_idx+e_idx< 1 ? [-1] : arr.slice(s_idx, e_idx+1)
}