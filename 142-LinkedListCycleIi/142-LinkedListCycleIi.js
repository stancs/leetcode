// Last updated: 4/29/2026, 10:34:00 AM
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    const arr = [];
    let node = head;
    while(node) {
        for(let i = 0; i < arr.length; i++) {
            if(node === arr[i]) {
                return node;
            }
        }
        arr.push(node);
        node = node.next;
    }
    return null;
};

var detectCycle = function(head) {
    const hash = new Set();
    let node = head;
    while(node) {
        if(hash.has(node)) {
            return node;
        }
        hash.add(node);
        node = node.next;
    }
    return null;
};

var detectCycle = function(head) {
    const hash = new Map();
    let node = head;
    while(node) {
        if(hash.has(node)) {
            return node;
        }
        hash.set(node, node);
        node = node.next;
    }
    return null;
};