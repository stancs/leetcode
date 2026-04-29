// Last updated: 4/29/2026, 10:33:06 AM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 2022-10-25
// T: 30:00s
// TC: O(n)
// SC: O(1)
var removeElements = function(head, val) {
    if(!head) {
        return null;
    }
    let node = head;
    let prev = null;
    let newHead = null;
    let isFirst = true;
    while(node !== null) {
        if(node.val !== val) {
            if(isFirst) {
                newHead = node;
                isFirst = false;
            }
            if(prev) {
                prev.next = node;
            }
            prev = node;
        } else {
            if(prev) {
                prev.next = null;
            }
        }
        node = node.next;
    }
    return newHead;
};

/*
// 2020-07-14
// 7:00s
// O(n) time | O(1) space
var removeElements = function(head, val) {
    let node = head;
    let lastValidNode;
    let newHead = null;
    while(node !== null) {
        if(node.val !== val) {
            if(!newHead) {
                newHead = node;
            }
            if(lastValidNode) {
                lastValidNode.next = node;    
            }
            lastValidNode = node;
        } 
        node = node.next;
    }
    if(lastValidNode) {
        lastValidNode.next = null;
    }
    return newHead;
};
*/