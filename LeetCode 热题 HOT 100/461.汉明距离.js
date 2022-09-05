/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let diff = x ^ y;
  let res = 0;
  while (diff) {
    diff &= diff - 1;
    res++;
  }
  return res;
};
