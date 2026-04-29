// Last updated: 4/29/2026, 10:36:29 AM
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
// 2022-12-03
// 7:40s
// O(n)
// O(1)
var swapPairs = function(head) {
    const swapHelper = node => {
        if(!node || !node.next) {
            return node;
        }
        const n1 = node;
        const n2 = node.next;
        
        const tmp = n2.next;
        n2.next = n1;
        n1.next = swapHelper(tmp);
        return n2;
    }
    return swapHelper(head);
};