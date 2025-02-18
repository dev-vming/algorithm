function solution(t, p) {
    const len = p.length;
    let cnt = 0;
    for(let i=0; i<=t.length-len; i++){
        if(Number(t.slice(i,len+i))<=Number(p)) cnt++;
    }
    return cnt;
}