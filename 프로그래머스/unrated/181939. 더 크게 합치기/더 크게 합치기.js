function solution(a, b) {
    const ab = String(a) + String(b);
    const ba = String(b) + String(a);
    
    if (Number(ab) < Number(ba)) {
        return Number(ba);
    } else {
        return Number(ab);
    }
}