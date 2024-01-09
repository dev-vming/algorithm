function solution(numbers) {
    const [a,b] = numbers.sort((a,b)=>b-a).splice(0,2);
    return a*b;
}