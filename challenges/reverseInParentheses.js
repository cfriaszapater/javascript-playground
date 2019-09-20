exports.reverseInParentheses = function reverseInParentheses(inputString) {
  let s = inputString;
  while (s.includes("(")) {
    s = reverseInnerGroups(s);
  }
  return s;
};

function reverseInnerGroups(s) {
  const innerGroups = findInnerGroups(s);
  s = reverseGroups(innerGroups, s);
  return removeInnerGroupParentheses(innerGroups, s);
}

function findInnerGroups(s) {
  let innerGroupStartIndex = -1;
  const innerGroups = [];
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (char === "(") {
      innerGroupStartIndex = i;
    } else if (innerGroupStartIndex > -1 && char === ")") {
      innerGroups.push({
        start: innerGroupStartIndex,
        end: i
      });
      innerGroupStartIndex = -1;
    }
  }
  return innerGroups;
}

function removeInnerGroupParentheses(groups, s) {
  // Starting from end so that group indexes are not altered by removing previous parenthesis
  for (let i = groups.length - 1; i >= 0; i--) {
    const group = groups[i];
    s = replaceCharAt(s, group.end);
    s = replaceCharAt(s, group.start);
  }
  return s;
}

function reverseGroups(groups, s) {
  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];
    s = reverseGroup(group, s);
  }
  return s;
}

function reverseGroup(group, s) {
  const startInnerString = group.start + 1;
  const endInnerString = group.end;
  s =
    s.substring(0, startInnerString) +
    reverse(s.slice(startInnerString, endInnerString)) +
    s.substring(endInnerString);
  return s;
}

function reverse(s) {
  return s
    .split("")
    .reverse()
    .join("");
}

function replaceCharAt(s, charIndexToReplace) {
  return (
    s.substring(0, charIndexToReplace) + s.substring(charIndexToReplace + 1)
  );
}

module.exports.reverseGroup = reverseGroup;
