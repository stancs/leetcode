// Last updated: 4/29/2026, 10:35:35 AM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || k === 0) {
        return head;
    }
    const arr = [];
    let curr = head;
    while(curr) {
        arr.push(curr);
        curr = curr.next;
    }
    console.log(`arr.length: ${arr.length}`);
    const len = arr.length;
    const remainder = k % len;
    if(remainder === 0) {
        return head;
    }
    const startIdx = len - remainder;
    const newHead = arr[startIdx];
    let count = 0;
    let node;
    while(count < len) {
        const idx = (startIdx + count) % len;
        node = arr[idx];
        if(node.next === null) {
            node.next = arr[0];
        }
        count++;
    }
    node.next = null;
    return arr[startIdx];
};