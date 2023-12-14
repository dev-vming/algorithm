function solution(my_string, s, e) {
    let str_arr = my_string.split("");
    let re_str = str_arr.slice(s,e+1).reverse().join("");
    str_arr.splice(s,e-s+1,re_str);
    return str_arr.join("");
}