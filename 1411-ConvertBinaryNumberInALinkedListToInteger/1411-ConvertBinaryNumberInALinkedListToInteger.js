// Last updated: 4/29/2026, 10:24:28 AM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
// O(n) time | O(1) space
var getDecimalValue = function(head) {
    let node = head;
    let num = 0;
    while(node !== null) {
        num *= 2;
        num += node.val;
        node = node.next;
    }
    return num;
};