function solution(arr) {
    const row_len = arr[0].length;
    const col_len = arr.length;
    
    if (col_len>row_len){
        const gab = Array(col_len-row_len).fill(0);
        return arr.map(a=>[...a,...gab])
        }    
    if(row_len>col_len){
        for(let i=0; i<row_len-col_len; i++){
            arr.push(Array(row_len).fill(0));
        }

    }
    return arr;
}