/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let l = 0;
  let res = 0;
  for (let r = 0; r < nums.length; r++) {
    if (nums[r]) {
      res = Math.max(res, r - l + 1);
    } else {
      l = r + 1;
    }
  }
  return res;
};
