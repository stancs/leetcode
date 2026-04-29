// Last updated: 4/29/2026, 10:34:02 AM
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const map = new Map();
    let curr = head;
    while(curr) {
        console.log('Node: ', curr.val);
        if(map.get(curr)) {
            return true;
        } 
        map.set(curr, true);
        curr = curr.next;
    }
    return false;
};