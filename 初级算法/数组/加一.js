/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    const c = digits[i];
    if (i === digits.length - 1) {
      carry = 1;
    }
    digits[i] = (c + carry) % 10;
    carry = Math.floor((c + carry) / 10);
  }
  if (carry) digits.unshift(1);
  return digits;
};
