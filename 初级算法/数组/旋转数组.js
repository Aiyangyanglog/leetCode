/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 1.方法一
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};
// 2.方法二
var containsDuplicate = function (nums) {
  const set = new Set();
  for (const x of nums) {
    if (set.has(x)) {
      return true;
    }
    set.add(x);
  }
  return false;
};
