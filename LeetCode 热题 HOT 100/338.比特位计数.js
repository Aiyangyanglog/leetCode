/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let arr = [];
  const count = (num) => {
    let res = 0;
    while (num) {
      num &= num - 1;
      res++;
    }
    return res;
  };
  for (let i = 0; i <= n; i++) {
    arr.push(count(i));
  }
  return arr;
};
