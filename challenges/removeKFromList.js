/*

Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in the list, since this is what you'll be asked to do during an interview.

Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k.

Example

    For l = [3, 1, 2, 3, 4, 5] and k = 3, the output should be
    removeKFromList(l, k) = [1, 2, 4, 5];
    For l = [1, 2, 3, 4, 5, 6, 7] and k = 10, the output should be
    removeKFromList(l, k) = [1, 2, 3, 4, 5, 6, 7].

Input/Output

    [execution time limit] 4 seconds (js)

    [input] linkedlist.integer l

    A singly linked list of integers.

    Guaranteed constraints:
    0 ≤ list size ≤ 105,
    -1000 ≤ element value ≤ 1000.

    [input] integer k

    An integer.

    Guaranteed constraints:
    -1000 ≤ k ≤ 1000.

    [output] linkedlist.integer
        Return l with all the values equal to k removed.

*/

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
exports.removeKFromList = function removeKFromList(l, k) {
  let current = l;
  if (!current || !current.value) {
    return current;
  }

  let root;
  let previous;
  while (current) {
    if (current.value !== k) {
      if (!root) {
        root = current;
      } else {
        previous.next = current;
      }
      previous = current;
    }
    current = current.next;
  }

  if (previous) {
    previous.next = null;
  }

  if (!root) {
    root = [];
  }

  return root;
};

function ListNode(x) {
  return {
    value: x,
    next: null
  };
}

function listFromArray(a) {
  let root;
  let current;
  a.forEach(element => {
    if (!root) {
      root = ListNode(element);
      current = root;
    } else {
      current.next = ListNode(element);
      current = current.next;
    }
  });

  return root;
}

function arrayFromList(l) {
  let current = l;
  const result = [];
  while (current && current.value) {
    result.push(current.value);
    current = current.next;
  }
  return result;
}

exports.ListNode = ListNode;
exports.listFromArray = listFromArray;
exports.arrayFromList = arrayFromList;
