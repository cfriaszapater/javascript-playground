exports.commonCharacterCount = function commonCharacterCount(string1, string2) {
  let commonChars = 0;
  let string2RemainingChars = string2;
  for (let i = 0; i < string1.length; i++) {
    const char = string1.charAt(i);
    let charIndexInString2 = string2RemainingChars.indexOf(char);
    if (charIndexInString2 >= 0) {
      commonChars++;
      string2RemainingChars = removeCharFromString(
        string2RemainingChars,
        charIndexInString2
      );
    }
  }
  return commonChars;
};

function removeCharFromString(string2RemainingChars, charIndexInString2) {
  return (
    string2RemainingChars.slice(0, charIndexInString2) +
    string2RemainingChars.slice(charIndexInString2 + 1)
  );
}
