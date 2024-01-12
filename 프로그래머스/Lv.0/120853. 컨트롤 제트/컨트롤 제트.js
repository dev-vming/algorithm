function solution(s) {
    s = s.split(" ")
    // Z가 있다면, 이전것과 같이 삭제
    while(s.includes('Z')) {
        s.splice(s.indexOf('Z')-1,2)
    }
    return s.reduce((a,b) => a+Number(b), 0)
}