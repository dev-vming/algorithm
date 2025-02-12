function solution(friends, gifts) {

  const arr = Array.from({ length: friends.length }, () =>
    Array(friends.length).fill(0)
  );
  const giftIndex = Array(friends.length).fill(0);
  const nextMonthGift = Array(friends.length).fill(0);

  gifts.map((gift, idx) => {
    const giverIdx = friends.indexOf(gift.split(" ")[0]);
    const takerIdx = friends.indexOf(gift.split(" ")[1]);

    giftIndex[giverIdx]++;
    giftIndex[takerIdx]--;

    arr[giverIdx][takerIdx]++;
  });

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr[i].length; j++) {
      if ((arr[i][j] === 0 && arr[j][i] === 0) || arr[i][j] === arr[j][i]) {
        if (giftIndex[i] !== giftIndex[j]) {
          giftIndex[i] > giftIndex[j] ? nextMonthGift[i]++ : nextMonthGift[j]++;
        }
      } else {
        arr[i][j] > arr[j][i] ? nextMonthGift[i]++ : nextMonthGift[j]++;
      }
    }
  }

  return Math.max(...nextMonthGift);
}