// Last updated: 4/29/2026, 10:35:01 AM
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
// 2022-10-25
// T: 8:16s
// TC: O(n)
// SC: O(1)
var deleteDuplicates = function(head) {
    if(!head) {
        return null;
    }
    const map = {};
    let curr = head;
    let prev;
    while(curr) {
        if(map[curr.val] === undefined) {
            map[curr.val] = true;
            if(prev) {
                prev.next = curr;
            }
            prev = curr;
        } 
        curr = curr.next;
    }
    prev.next = null;
    return head;
};

// 2020-07-13
// 12:42s
// O(n) time | O(1) space
var deleteDuplicates2 = function(head) {
    let prev;
    let node = head;
    while(node !== null) {
        if(prev) {
            if(prev.val === node.val) {
                prev.next = node.next;
            } else {
                prev = node;
            }
        } else {
            prev = node;    
        }
        node = node.next;
    } 
    return head;
};