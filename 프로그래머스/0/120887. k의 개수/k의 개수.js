function solution(i, j, k) {
    let count = 0;
    for(let a=i; a<=j; a++){
        String(a).split('').map(v=>{if(v===String(k))count++})
    }
    return count;
}