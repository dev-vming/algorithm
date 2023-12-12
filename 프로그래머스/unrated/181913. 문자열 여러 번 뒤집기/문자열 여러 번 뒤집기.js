function solution(my_string, queries) {
    queries.map(([s,e])=>{
        let copy_arr = [...my_string];
        let reverced_arr = copy_arr.slice(s,e+1).reverse().join("");
        copy_arr.splice(s, e-s+1, reverced_arr);
        my_string = copy_arr.join("");
    })
    return my_string;
}