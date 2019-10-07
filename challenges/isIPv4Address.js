exports.isIPv4Address = function isIPv4Address(inputString) {
  const regexp = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;
  const matches = regexp.exec(inputString);
  if (!matches) {
    return false;
  }
  return matches.slice(1).every(e => Number(e) >= 0 && Number(e) <= 255);
};
