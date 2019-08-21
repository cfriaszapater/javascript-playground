/* jshint esversion: 8 */

exports.jumpingOnClouds = function (clouds) {
  const GOOD_CLOUD = 0;

  var jumps = 0;
  for (let i = 0; i < clouds.length - 1;) {
    if (clouds[i + 2] === GOOD_CLOUD) {
      i = i + 2;
    } else if (clouds[i + 1] === GOOD_CLOUD) {
      i = i + 1;
    } else {
      throw new Error('Impossible to win: cannot jump to a good cloud, next two are bad, I\'m in ' + i);
    }
    jumps++;
  }
  return jumps;
};
