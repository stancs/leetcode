// Last updated: 4/29/2026, 10:29:41 AM
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
// 2022-11-12
// 2:24s
// O(n)
// O(1)
var swapNodes = function(head, k) {
    const arr = [];
    let node = head;
    while(node) {
        arr.push(node);
        node = node.next;
    }
    const node1 = arr[k - 1];
    const node2 = arr[arr.length - k];
    const tmp = node1.val;
    node1.val = node2.val;
    node2.val = tmp;
    return head;
};