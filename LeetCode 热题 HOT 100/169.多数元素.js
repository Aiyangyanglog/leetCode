/**
 * @param {number[]} nums
 * @return {number}
 */

// 方法一
var majorityElement = function (nums) {
  nums.sort();
  return nums[Math.floor(nums.length / 2)];
};

// 方法二
var majorityElement = function (nums) {
  let map = new Map();
  nums.forEach((item) => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  });
  for (let c of map) {
    if (c[1] > Math.floor(nums.length / 2)) {
      return c[0];
    }
  }
};
