function solution(myString, pat) {
    let arr = [];
    for(let i = 0; i<myString.length; i++){
        myString[i] === "A" ? arr.push("B") : arr.push("A");
    }
    return arr.join("").includes(pat) ? 1 : 0;
}