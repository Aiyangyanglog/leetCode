/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法一
var singleNumber = function (nums) {
  let ans = 0;
  nums.forEach((item) => {
    ans ^= item;
  });
  return ans;
};

// 方法二
var singleNumber = function (nums) {
  let set = new Set();
  for (let item of nums) {
    if (set.has(item)) {
      set.delete(item);
    } else {
      set.add(item);
    }
  }
  return Array.from(set)[0];
};
