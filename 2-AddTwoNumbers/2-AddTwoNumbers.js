// Last updated: 4/29/2026, 10:37:00 AM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let prevOut;
    let root;
    let curr1 = l1;
    let curr2 = l2;
    let carry = 0;
    while(curr1 || curr2) {
        const val1 = curr1 !== null? curr1.val: 0;
        const val2 = curr2 !== null? curr2.val: 0;
        const sum = val1 + val2 + carry;
        const remainder = sum % 10;
        carry = Math.floor(sum / 10);
        if(!prevOut) {
            root = new ListNode(remainder, null);
            prevOut = root;
        } else {
            prevOut.next = new ListNode(remainder, null);
            prevOut = prevOut.next;
        }
        if(curr1) {
            curr1 = curr1.next;
        }
        if(curr2) {
            curr2 = curr2.next;
        }
    }
    if(carry > 0) {
        prevOut.next = new ListNode(carry, null);
    }
    return root;
};