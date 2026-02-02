function solution(new_id) {
    let id = new_id;

    // step 1: 소문자로 변환
    id = id.toLowerCase();

    // step 2: 허용 문자만 남기기
    id = id.replace(/[^a-z0-9-_.]/g, "");

    // step 3: 마침표 2개 이상인 경우 1개로 변환
    id = id.replace(/\.{2,}/g, ".");

    // step 4: 앞뒤 마침표 제거
    id = id.replace(/^\.+|\.+$/g, "");

    // step 5: 빈 문자열이면 "a"로 대체
    if (id === "") {
        id = "a";
    }

    // step 6: 길이 16 이상이면 15자까지만
    if (id.length >= 16) {
        id = id.slice(0, 15);
        // 자른 뒤 끝에 마침표 있으면 제거
        id = id.replace(/\.$/, "");
    }

    // step 7: 길이 2 이하인 경우 마지막 문자 반복
    while (id.length < 3) {
        id += id[id.length - 1];
    }

    return id;
}
