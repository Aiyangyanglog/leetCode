/**
 * @param {number} n
 * @return {number}
 */
// 方法一
var climbStairs = function (n) {
  if (n < 2) return n;
  let dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[n];
};

// 方法二
var climbStairs = function (n) {
  if (n < 2) return 1;
  let dp0 = 1;
  let dp1 = 1;
  for (let i = 2; i <= n; i++) {
    const temp = dp0 + dp1;
    dp0 = dp1;
    dp1 = temp;
  }
  return dp1;
};
