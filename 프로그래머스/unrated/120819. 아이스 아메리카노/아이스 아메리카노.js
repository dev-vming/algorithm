function solution(money) {
    const glass = Math.floor(money/5500);
    const change = money%5500;
    return [glass, change];
}