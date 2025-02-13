function solution(price, money, count) {
    const cost = Array.from({length:count},(_,i)=>price*(i+1)).reduce((a,b)=>a+b);
    return cost>money ? cost-money : 0;
}