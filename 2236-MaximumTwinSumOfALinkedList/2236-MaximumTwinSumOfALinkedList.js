// Last updated: 4/29/2026, 10:21:32 AM
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
var pairSum = function(head) {
    const arr = [];
    let node = head;
    while(node) {
        arr.push(node);
        node = node.next;
    }
    const n = arr.length;
    let max;
    for(let i = 0; i < n / 2; i++) {
        const twinSum = arr[i].val + arr[n-1-i].val;
        if(max === undefined || twinSum > max) {
            max = twinSum;
        }
    }
    return max;
};