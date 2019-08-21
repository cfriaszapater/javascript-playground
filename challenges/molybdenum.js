/* jshint esversion: 8 */

function solution (kSegmentLength, maxElementValue, array) {
  // N and M are integers within the range [1..100,000];
  // K is an integer within the range [1..N];
  // each element of array A is an integer within the range [1..M].
//   console.log('array:', array);

  const N = array.length;

  const increasedArray = array.slice();
  for (let i = 0; i < increasedArray.length; i++) {
    increasedArray[i]++;
  }
  //   console.log('increasedArray:', increasedArray);

  var leaders = new Set();
  // for each possible segment
  for (let i = 0; i <= N - kSegmentLength; i++) {
    // concat array: previous + segment (increased elements) + remaining
    var previous = array.slice(0, i);
    var segment = increasedArray.slice(i, i + kSegmentLength);
    var remaining = array.slice(i + kSegmentLength, N);
    var candidateArray = previous.concat(segment).concat(remaining);
    // console.log('candidateArray:', candidateArray);

    var foundLeader = leader(candidateArray);
    if (foundLeader) {
      leaders.add(foundLeader);
    }
  }

  return Array.from(leaders).sort((firstEl, secondEl) => firstEl - secondEl);
}

// value that occurs in more than half of the elements of the array
function leader (array) {
  var leaderThreshold = Math.floor(array.length / 2);
  var occurrences = {};
  var leader = null;
  for (var i = 0; i < array.length && !leader; i++) {
    var num = array[i];
    occurrences[num] = occurrences[num] ? occurrences[num] + 1 : 1;
    if (occurrences[num] > leaderThreshold) {
      leader = num;
    }
  }
  return leader;
}

exports.solution = solution;
exports.leader = leader;
