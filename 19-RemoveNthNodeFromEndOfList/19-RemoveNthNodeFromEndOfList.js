// Last updated: 4/29/2026, 10:36:36 AM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let curr = head;
    const arr = [];
    while(curr) {
        arr.push(curr);
        curr = curr.next;
    }
    const len = arr.length;
    const l1 = arr.slice(0, len - n);
    const l2 = arr.slice(len - n + 1);
    const list = [...l1, ...l2];
    if(list.length === 0) {
        return null;
    }
    for(let i = 0; i < list.length - 1; i++) {
        list[i].next = list[i+1];
    }
    list[list.length - 1].next = null;
    return list[0];
};