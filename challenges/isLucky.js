exports.isLucky = function isLucky(n) {
  const arrayOfDigits = digits(n);
  const halfIndex = arrayOfDigits.length / 2;
  return (
    sum(arrayOfDigits.slice(0, halfIndex)) ===
    sum(arrayOfDigits.slice(halfIndex))
  );
};

function digits(n) {
  let arrayOfDigits = [];
  let sNumber = n.toString();

  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    arrayOfDigits.push(+sNumber.charAt(i));
  }

  return arrayOfDigits;
}

function sum(arrayOfNumbers) {
  let sum = 0;
  for (var i = 0; i < arrayOfNumbers.length; ) {
    sum += arrayOfNumbers[i++];
  }
  return sum;
}
