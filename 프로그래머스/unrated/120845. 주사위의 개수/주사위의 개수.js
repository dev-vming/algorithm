function solution(box, n) {
    const w = Math.floor(box[0]/n);
    const h = Math.floor(box[1]/n);
    const l = Math.floor(box[2]/n);
    return w*h*l;
}