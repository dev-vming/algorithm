function solution(my_string) {
    let s_arr = my_string.split(" ")
    return s_arr.filter((s)=>s!== "")
}