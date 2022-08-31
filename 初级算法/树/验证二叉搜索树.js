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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const rec = (root, lower, upper) => {
    if (!root) return true;
    if (root.val <= lower || root.val >= upper) {
      return false;
    }
    return rec(root.left, lower, root.val) && rec(root.right, root.val, upper);
  };
  return rec(root, -Infinity, Infinity);
};
