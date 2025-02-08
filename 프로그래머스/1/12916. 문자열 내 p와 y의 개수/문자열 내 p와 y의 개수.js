function solution(s){
    const checkP = s.split('').filter(v=>v==='p'||v==='P').length;
    const checkY = s.split('').filter(v=>v==='y'||v==='Y').length;

    return checkP===checkY ? true : false;
}