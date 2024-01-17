function solution(my_string) {
    const low = my_string.toLowerCase().split("");
    return low.sort().join('');
}