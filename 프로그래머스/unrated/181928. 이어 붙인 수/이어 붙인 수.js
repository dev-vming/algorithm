function solution(num_list) {
    let even = "";
    let odd = "";
    for (n of num_list){
        n%2 === 0 ? even += String(n) : odd += String(n);
    }
    return Number(even)+Number(odd);
}