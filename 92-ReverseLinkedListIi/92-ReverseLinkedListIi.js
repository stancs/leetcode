// Last updated: 4/29/2026, 10:34:55 AM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let curr = head;
    const arr = [];
    while(curr) {
        arr.push(curr);
        curr = curr.next;
    }
    const l1 = arr.slice(0, left-1);
    const l2 = arr.slice(left-1, right);
    const l3 = arr.slice(right);
    const l2rev = l2.reverse();
    const arr2 = [...l1, ...l2rev, ...l3];
    for(let i = 0; i < arr2.length - 1; i++) {
        const n1 = arr2[i];
        const n2 = arr2[i+1];
        n1.next = n2;
    }
    arr2[arr2.length - 1].next = null;
    return arr2[0];
};