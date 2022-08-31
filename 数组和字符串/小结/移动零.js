/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = 0, len = nums.length; i < len; i++) {
    const c = nums[i];
    if (!c) {
      nums.splice(i, 1);
      nums.push(0);
      len--;
      i--;
    }
  }
};
