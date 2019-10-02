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
  this.value = x;
  this.next = null;
}

function listFromArray(a) {
  let root;
  let current;
  a.forEach(element => {
    if (!root) {
      root = new ListNode(element);
      current = root;
    } else {
      current.next = new ListNode(element);
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
