exports.solution = function solution(N) {
  const binaryArray = dec2binArray(N);
  return greatestGap(binaryArray);
};

function greatestGap(binaryArray) {
  let greatestGap = 0;
  let currentGap = -1;
  for (const b of binaryArray) {
    if (b === 0) {
      if (currentGap > -1) {
        currentGap++;
      } else {
        // gap not started
      }
    } else {
      if (currentGap > greatestGap) {
        // finish gap
        greatestGap = currentGap;
        currentGap = 0;
      } else {
        // start gap
        currentGap = 0;
      }
    }
  }
  return greatestGap;
}

function dec2binArray(N) {
  return dec2binStr(N)
    .split("")
    .map(Number);
}

function dec2binStr(dec) {
  return (dec >>> 0).toString(2);
}

exports.dec2binArray = dec2binArray;
