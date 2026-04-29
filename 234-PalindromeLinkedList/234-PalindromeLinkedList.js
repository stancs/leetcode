// Last updated: 4/29/2026, 10:32:29 AM
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
// 2:55s
// O(n) time | O(n) space
var isPalindrome = function(head) {
    const stack = [];
    let node = head;
    while(node !== null) {
        stack.push(node);
        node = node.next;
    }
    node = head;
    while(node !== null) {
        if(node.val !== stack.pop().val) {
            return false;
        }
        node = node.next
    }
    return true;
};