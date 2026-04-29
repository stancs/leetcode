// Last updated: 4/29/2026, 10:36:25 AM
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
var reverseKGroup = function(head, k) {
    let arr = [];
    let curr = head;
    while(curr) {
        arr.push(curr);
        curr = curr.next;
    }
    const output = [];
    while(arr.length >= k) {
        const group = arr.slice(0, k);
        arr = arr.slice(k);
        const rev = group.reverse();
        output.push(...rev);
    }
    output.push(...arr);
    for(let i = 0; i < output.length - 1; i++) {
        output[i].next = output[i+1];
    }
    output[output.length - 1].next = null;
    console.log(output)
    return output[0];
};