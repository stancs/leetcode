// Last updated: 4/29/2026, 10:21:35 AM
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
var deleteMiddle = function(head) {
    if(!head) {
        return head;
    }
    const arr = [];
    let node = head;
    while(node) {
        arr.push(node);
        node = node.next;
    }
    console.log(`len: ${arr.length}`);
    if(arr.length === 1) {
        return null;
    }
    const mid = Math.floor(arr.length / 2);
    arr[mid - 1].next = arr[mid].next;
    return head;
};