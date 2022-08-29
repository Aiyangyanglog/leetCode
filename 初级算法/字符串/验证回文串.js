/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let a = s.toLocaleLowerCase().match(/[a-z0-9]+/g);
  if (!a) return true;
  let str = a.join("");
  // 双指针
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};
