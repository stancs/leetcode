// Last updated: 4/29/2026, 10:32:26 AM
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// Not a good problem
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};