function solution(absolutes, signs) {
    const arr = absolutes.map((num,idx)=>{
        return signs[idx] ? num : num*-1;
    });
    return arr.reduce((a,b)=>a+b);
}