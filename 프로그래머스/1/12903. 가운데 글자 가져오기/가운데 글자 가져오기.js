function solution(s) {
    const midIdx =parseInt(s.length/2);
    if(s.length%2){
        return s[midIdx];
    } else {
        return s[midIdx-1]+s[midIdx];
    }
}