/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let p = head;
  let arr = [];
  while (p) {
    arr.push(p.val);
    p = p.next;
  }
  arr.splice(arr.length - n, 1);
  let res = new ListNode(0);
  let p2 = res;
  for (let item of arr) {
    p2.next = new ListNode(item);
    p2 = p2.next;
  }
  return res.next;
};
