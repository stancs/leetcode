// Last updated: 4/29/2026, 10:33:37 AM
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 2022-12-01
// 41:09s
// O(n1+n2)
// O(n1+n2)
var getIntersectionNode = function(headA, headB) {
    const arr1 = [];
    const arr2 = [];
    let node1 = headA;
    let node2 = headB;
    while(node1) {
        arr1.push(node1);
        node1 = node1.next;
    }
    while(node2) {
        arr2.push(node2);
        node2 = node2.next;
    }
    const rev1 = arr1.reverse();
    const rev2 = arr2.reverse();
    console.log(rev1);
    console.log(rev2);
    const minLen = Math.min(rev1.length, rev2.length);
    let prev = null;
    for(let i = 0; i < minLen; i++) {
        if(rev1[i] !== rev2[i]) {
            return prev;
        }
        prev = rev1[i];
    }
    return prev;
};