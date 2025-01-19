function timeToSec(str) {
  const [mm, ss] = str.split(":").map(Number);
  return mm * 60 + ss;
}

function solution(video_len, pos, op_start, op_end, commands) {
  const totalSec = timeToSec(video_len);
  let posSec = timeToSec(pos);
  const opStartSec = timeToSec(op_start);
  const opEndSec = timeToSec(op_end);

  commands.forEach((str) => {
    if (posSec >= opStartSec && posSec < opEndSec) {
      posSec = opEndSec;
    }
    if (str === "next") {
      posSec + 10 > totalSec ? (posSec = totalSec) : (posSec += 10);
    } else {
      posSec - 10 < 0 ? (posSec = 0) : (posSec -= 10);
    }

    if (posSec >= opStartSec && posSec < opEndSec) {
      posSec = opEndSec;
    }
  });

  const MM = String(Math.floor(posSec / 60)).padStart(2, "0");
  const SS = String(posSec % 60).padStart(2, "0");

  return MM+":"+SS ; 
}


