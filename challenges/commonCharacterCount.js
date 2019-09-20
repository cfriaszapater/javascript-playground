exports.commonCharacterCount = function(string1, string2) {
  let commonChars = 0;
  let string2RemainingChars = string2;
  for (let i = 0; i < string1.length; i++) {
    const char = string1.charAt(i);
    if (string2RemainingChars.includes(char)) {
      commonChars++;
      string2RemainingChars =
        string2RemainingChars.slice(0, i) + string2RemainingChars.slice(i + 1);
    }
  }
  return commonChars;
};
