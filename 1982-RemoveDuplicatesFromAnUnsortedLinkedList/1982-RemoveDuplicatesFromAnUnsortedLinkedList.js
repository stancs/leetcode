// Last updated: 4/29/2026, 10:22:24 AM
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
// 2022-12-01
// 09:53s
// O(n)
// O(n)
var deleteDuplicatesUnsorted = function(head) {
    const arr1 = [];
    let node = head;
    const map = {};
    while(node) {
        const val = node.val;
        if(map[val] === undefined) {
            map[val] = 1;
        } else {
            map[val]++;
        }
        arr1.push(node);
        node = node.next;
    }
    console.log(map);
    const arr2 = arr1.filter(node => map[node.val] === 1);
    for(let i = 0; i < arr2.length - 1; i++) {
        arr2[i].next = arr2[i+1];
    }
    if(arr2.length > 0) {
        arr2[arr2.length - 1].next = null;
        return arr2[0];
    } else {
        return null;
    }
};