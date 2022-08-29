/**
 * @param {number[]} nums
 * @return {number}
 */
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
