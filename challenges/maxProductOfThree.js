/*

A non-empty array A consisting of N integers is given. The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).

For example, array A such that:
  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6

contains the following example triplets:

        (0, 1, 2), product is −3 * 1 * 2 = −6
        (1, 2, 4), product is 1 * 2 * 5 = 10
        (2, 4, 5), product is 2 * 5 * 6 = 60

Your goal is to find the maximal product of any triplet.

Write a function:

    function solution(A);

that, given a non-empty array A, returns the value of the maximal product of any triplet.

For example, given array A such that:
  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6

the function should return 60, as the product of triplet (2, 4, 5) is maximal.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [3..100,000];
        each element of array A is an integer within the range [−1,000..1,000].

*/

exports.solution = function solution(A) {
  const sortedPositives = filterSortPositives(A);
  const sortedNegatives = filterSortNegatives(A);

  const candidateMaxProducts = [];
  if (sortedPositives.length >= 3) {
    candidateMaxProducts.push(
      sortedPositives[0] * sortedPositives[1] * sortedPositives[2]
    );
  }
  if (sortedNegatives.length >= 2 && sortedPositives.length >= 1) {
    candidateMaxProducts.push(
      sortedNegatives[0] * sortedNegatives[1] * sortedPositives[0]
    );
  }
  if (sortedPositives.length === 0) {
    const last = sortedNegatives.length - 1;
    candidateMaxProducts.push(
      sortedNegatives[last] *
        sortedNegatives[last - 1] *
        sortedNegatives[last - 2]
    );
  }
  return Math.max(...candidateMaxProducts);
};

function filterSortPositives(A) {
  const sortedPositives = A.filter(element => element >= 0);
  sortedPositives.sort((a, b) => b - a);
  return sortedPositives;
}

function filterSortNegatives(A) {
  const sortedNegatives = A.filter(element => element < 0);
  sortedNegatives.sort((a, b) => a - b);
  return sortedNegatives;
}

exports.filterSortPositives = filterSortPositives;
exports.filterSortNegatives = filterSortNegatives;
