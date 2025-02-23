function solution(strings, n) {
    const sortedArr = strings.sort();
    return sortedArr.sort((a,b)=>a[n].charCodeAt()-b[n].charCodeAt());
}