/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = new Map();
  let res = [];
  for (let c of nums1) {
    if (map.has(c)) {
      map.set(c, map.get(c) + 1);
    } else {
      map.set(c, 1);
    }
  }
  for (let t of nums2) {
    if (map.get(t)) {
      res.push(t);
      map.set(t, map.get(t) - 1);
    }
  }
  return res;
};
