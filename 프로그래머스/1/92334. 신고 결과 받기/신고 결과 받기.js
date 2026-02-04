function solution(id_list, report, k) {
    // 신고당한 유저 -> 신고한 유저들
    const reportMap = new Map();
    // 유저 -> 메일 받은 횟수
    const mailCount = new Map(); 
    
    // 아이디별 신고한 유저와 메일 횟수 기본 셋팅
    id_list.forEach(id => {
        reportMap.set(id, new Set());
        mailCount.set(id, 0);
    });
    
    // 유저별 신고한 유저들 확인
    report.forEach(r => {
        const [from, to] = r.split(' ');
        reportMap.get(to).add(from);
    });
    
    // 신고자가 k 이상이면 메일횟수 추가
    reportMap.forEach((reporters, user) => {
        if (reporters.size >= k) {
            reporters.forEach(r => {
                mailCount.set(r, mailCount.get(r) + 1);
            });
        }
    });
    
    // 아이디별 메일 횟수 반환
    return id_list.map(id => mailCount.get(id));
}
