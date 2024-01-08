function solution(balls, share) {
  let answer = 1;
  while (share) {
    //share가 0이 되기 전까지
    answer *= balls / share;
    balls--;
    share--;
  }
  return Math.round(answer);
}