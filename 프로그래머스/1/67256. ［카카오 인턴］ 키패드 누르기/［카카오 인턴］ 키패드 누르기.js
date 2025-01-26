function solution(numbers, hand) {
    
  function findIdx(num) {
    const keypad = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      ["*", 0, "#"],
    ];
      
    for (let y = 0; y < keypad.length; y++) {
      for (let x = 0; x < keypad[y].length; x++) {
        if (num === keypad[y][x]) return [y, x];
      }
    }
  };

  let left = "*";
  let right = "#";
  let answer = "";

  for (n of numbers) {
    if (n == 1 || n == 4 || n == 7) {
      answer += "L";
      left = n;
    } else if (n == 3 || n == 6 || n == 9) {
      answer += "R";
      right = n;
    } else {
      const leftIdx = findIdx(left);
      const rightIdx = findIdx(right);
      const curIdx = findIdx(n);

      const lDiff =
        Math.abs(leftIdx[0] - curIdx[0]) + Math.abs(leftIdx[1] - curIdx[1]);
      const rDiff =
        Math.abs(rightIdx[0] - curIdx[0]) + Math.abs(rightIdx[1] - curIdx[1]);

      if (lDiff > rDiff) {
        answer += "R";
        right = n;
      } else if(lDiff < rDiff) {
        answer += "L";
        left = n;
      } else {
        if (hand === 'right') {
          answer += "R";
          right = n;
        } else {
          answer += 'L';
          left = n;
        }
      }
    }
  }
  return answer;
}
