/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const q = [[root, 0]];
  let res = [];
  while (q.length) {
    const [n, len] = q.shift();
    if (res[len]) {
      res[len].push(n.val);
    } else {
      res.push([n.val]);
    }
    if (n.left) q.push([n.left, len + 1]);
    if (n.right) q.push([n.right, len + 1]);
  }
  return res;
};
