/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const c = numbers[i];
    const t = target - c;
    if (map.has(t)) {
      return [map.get(t), i + 1];
    } else {
      map.set(c, i + 1);
    }
  }
};
