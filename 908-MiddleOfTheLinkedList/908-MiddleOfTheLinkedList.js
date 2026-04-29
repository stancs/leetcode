// Last updated: 4/29/2026, 10:27:07 AM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 2022-11-12
// 3:15s
// O(n)
// O(1)
var middleNode = function(head) {
    let node1 = head;
    let node2 = head;
    while(node1.next) {
        node1 = node1.next;
        if(node1.next) {
            node1 = node1.next;
        }
        node2 = node2.next;
    }
    return node2;
};