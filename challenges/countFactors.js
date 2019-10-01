/*

A positive integer D is a factor of a positive integer N if there exists an integer M such that N = D * M.

For example, 6 is a factor of 24, because M = 4 satisfies the above condition (24 = 6 * 4).

Write a function:

    function solution(N);

that, given a positive integer N, returns the number of its factors.

For example, given N = 24, the function should return 8, because 24 has 8 factors, namely 1, 2, 3, 4, 6, 8, 12, 24. There are no other factors of 24.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [1..2,147,483,647].

*/

exports.solution = function solution(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }

  let i = 2;
  let factors = 0;
  while (i * i < n) {
    if (n % i === 0) {
      factors += 2;
    }
    i++;
  }
  if (i * i === n) {
    factors++;
  }

  // +1 to add "factors" 1 and n
  return factors + 2;
};
