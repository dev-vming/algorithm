function solution(my_string) {
    const stringArr = my_string.split("");
    
    const noOverlay = Array.from(new Set(stringArr));
    
    return noOverlay.join("");
}