// Last updated: 4/29/2026, 10:35:00 AM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(!head) {
        return head;
    }
    const arr = [];
    let curr = head;
    while(curr) {
        arr.push(curr);
        curr = curr.next;
    }
    const arr2 = arr.filter(node => node.val < x);
    console.log('arr2: ', arr2);
    const arr3 = arr.filter(node => node.val >= x);
    console.log('arr3: ', arr3);
    const arr4 = [...arr2, ...arr3];
    if(arr4.length === 1) {
        return arr4[0];
    }
    for(let i = 0; i < arr4.length - 1; i++) {
        arr4[i].next = arr4[i+1];
    }
    arr4[arr4.length - 1].next = null;
    return arr4[0];
};