/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let p = head;
  let res = [];
  while (p) {
    res.push(p.val);
    p = p.next;
  }
  let len = res.length;
  let midlen = Math.floor(len / 2);
  for (let i = 0; i < midlen; i++) {
    if (res[i] !== res[len - 1 - i]) {
      return false;
    }
  }
  return true;
};
