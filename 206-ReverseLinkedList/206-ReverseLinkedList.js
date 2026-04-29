// Last updated: 4/29/2026, 10:33:00 AM
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
var reverseList = function(head) {
    if(!head) {
        return null;
    }
    const arr = [];
    let node = head;
    while(node) {
        arr.push(node);
        node = node.next;
    }
    const newHead = arr[arr.length - 1];
    for(let i = arr.length - 1; i >= 0; i--) {
        console.log(i);
        const currNode = arr[i];
        const nextNode = i-1 >= 0? arr[i-1]: null;
        currNode.next = nextNode;
    }
    return newHead;
};