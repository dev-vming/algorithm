function solution(a, b) {
    const ab = String(a) + String(b);
    const ab2 = 2 * a * b;
    
    if ( ab2 > Number(ab) ) {
        return ab2;
    }else {
        return Number(ab);
    }
}