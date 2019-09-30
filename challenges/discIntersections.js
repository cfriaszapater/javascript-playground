/*

We draw N discs on a plane. The discs are numbered from 0 to N − 1. An array A of N non-negative integers, specifying the radiuses of the discs, is given. The J-th disc is drawn with its center at (J, 0) and radius A[J].

We say that the J-th disc and K-th disc intersect if J ≠ K and the J-th and K-th discs have at least one common point (assuming that the discs contain their borders).

The figure below shows discs drawn for N = 6 and A as follows:
  A[0] = 1
  A[1] = 5
  A[2] = 2
  A[3] = 1
  A[4] = 4
  A[5] = 0

There are eleven (unordered) pairs of discs that intersect, namely:

        discs 1 and 4 intersect, and both intersect with all the other discs;
        disc 2 also intersects with discs 0 and 3.

Write a function:

    function solution(A);

that, given an array A describing N discs as explained above, returns the number of (unordered) pairs of intersecting discs. The function should return −1 if the number of intersecting pairs exceeds 10,000,000.

Given array A shown above, the function should return 11, as explained above.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [0..100,000];
        each element of array A is an integer within the range [0..2,147,483,647].


**** SOLUTION DRAFT ****

  A[0] = 1 => -1..1 => -1, 0, 1
  A[1] = 5 => -4..6
  A[2] = 2 =>  0..4
  A[3] = 1 =>  2..4
  A[4] = 4 =>  0..8
  A[5] = 0 =>  5..5

	orderedDisks = order by max point
	  A[4] = 4 =>  0..8
	  A[1] = 5 => -4..6
	  A[5] = 0 =>  5..5
	  A[2] = 2 =>  0..4
	  A[3] = 1 =>  2..4
	  A[0] = 1 => -1..1

	countMaxPoints:
val			1			2	1	1		1
pos		0	1	2	3	4	5   6   7   8

	prefix sum of max points:
sum		0	1			3	4	5		6
shift	 	0	1			3	4	5	6
wrong	 	0			1	3	4		5
pos		0	1	2	3	4	5   6   7   8

for each maxPoint in orderedDiscs
	collisions+= collisionsWithLower(maxPoint, prefixSum)
	collisions+= collisionsAtThisPoint(maxPoint, prefixSum)

collisionsWithLower:
	return prefixSumShifted[maxPoint] - prefixSumShifted[minPoint]:
		5 = 5 - 0
		4 = 4 - 0
		0 = 3 - 3
		1 = 1 - 0
		0 = 1 - 1
		0 = 0 - 0

collisionsAtThisPoint:
	return countMaxPoints[point] - 1
	0
	0
	0
	1 = 2 - 1
	0

*/

exports.solution = function solution(A) {
  const discsByMaxPoint = sortByMaxPoint(discs(A));
  const maxPointsCount = countMaxPoints(discsByMaxPoint);
  const prefixSumMaxPoints = calcPrefixSumMaxPoints(maxPointsCount);

  return countCollisions(discsByMaxPoint, prefixSumMaxPoints, maxPointsCount);
};

function discs(A) {
  const discs = [];
  for (let i = 0; i < A.length; i++) {
    discs.push({ minPoint: i - A[i], maxPoint: i + A[i] });
  }
  return discs;
}

function sortByMaxPoint(discs) {
  return discs.sort((disc1, disc2) => disc2.maxPoint - disc1.maxPoint);
}

function countMaxPoints(discs) {
  const maxPointsCount = new Map();
  for (let i = 0; i < discs.length; i++) {
    const disc = discs[i];
    if (maxPointsCount.has(disc.maxPoint)) {
      maxPointsCount.set(disc.maxPoint, maxPointsCount.get(disc.maxPoint) + 1);
    } else {
      maxPointsCount.set(disc.maxPoint, 1);
    }
  }
  return maxPointsCount;
}

function calcPrefixSumMaxPoints(maxPointsCount) {
  const prefixSumMaxPoints = new MapWithSearch();
  let sum = 0;
  const maxPointsCountReverseOrder = reverse(maxPointsCount);
  maxPointsCountReverseOrder.forEach((count, maxPoint) => {
    sum += count;
    prefixSumMaxPoints.set(maxPoint + 1, sum);
  });
  return prefixSumMaxPoints;
}

function reverse(map) {
  const reversedEntries = Array(map.size);
  let i = reversedEntries.length - 1;
  map.forEach((point, key) => {
    reversedEntries[i] = [key, point];
    i--;
  });
  return new Map(reversedEntries);
}

function countCollisions(discsByMaxPoint, prefixSumMaxPoints, maxPointsCount) {
  let collisions = 0;
  for (let i = 0; i < discsByMaxPoint.length; i++) {
    const disc = discsByMaxPoint[i];
    collisions += collisionsWithLower(disc, prefixSumMaxPoints);
    if (collisions > 10000000) {
      return -1;
    }
  }
  for (const point of maxPointsCount.keys()) {
    collisions += collisionsAtThisPoint(point, maxPointsCount);
    if (collisions > 10000000) {
      return -1;
    }
  }
  return collisions;
}

function collisionsWithLower(disc, prefixSumMaxPoints) {
  return (
    prefixSumMaxPoints.getValueOfNearestLowerKey(disc.maxPoint) -
    prefixSumMaxPoints.getValueOfNearestLowerKey(disc.minPoint)
  );
}

function collisionsAtThisPoint(point, maxPointsCount) {
  return maxPointsCount.get(point) - 1;
}

class MapWithSearch extends Map {
  set(key, value) {
    super.set(key, value);
    // invalidate cache
    this.cache = undefined;
  }

  searchNearestLowerKey(point) {
    if (!this.cache) {
      this.cache = Array.from(this.keys());
    }

    if (point < this.cache[0]) {
      return 0;
    }
    if (point > this.cache[this.cache.length - 1]) {
      return this.cache[this.cache.length - 1];
    }

    let lo = 0;
    let hi = this.cache.length - 1;

    while (lo <= hi) {
      let mid = Math.floor((hi + lo) / 2);

      if (point < this.cache[mid]) {
        hi = mid - 1;
      } else if (point > this.cache[mid]) {
        lo = mid + 1;
      } else {
        return this.cache[mid];
      }
    }
    // lo == hi + 1
    return this.cache[lo] <= point ? this.cache[lo] : this.cache[hi];
  }

  getValueOfNearestLowerKey(point) {
    let nearestLowerKey = this.searchNearestLowerKey(point);
    if (!this.has(nearestLowerKey)) {
      if (nearestLowerKey === 0) {
        return 0;
      }
    }
    return this.get(nearestLowerKey);
  }
}

exports.discs = discs;
exports.sortByMaxPoint = sortByMaxPoint;
exports.countMaxPoints = countMaxPoints;
exports.calcPrefixSumMaxPoints = calcPrefixSumMaxPoints;
exports.countCollisions = countCollisions;
exports.collisionsWithLower = collisionsWithLower;
exports.collisionsAtThisPoint = collisionsAtThisPoint;
exports.reverse = reverse;
exports.MapWithSearch = MapWithSearch;
