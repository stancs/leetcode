// Last updated: 4/29/2026, 10:33:59 AM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// 2022-12-04
// 11:36s
// O(n)
// O(n)
var reorderList = function(head) {
    const arr = [];
    let curr = head;
    while(curr) {
        arr.push(curr);
        curr = curr.next;
    }
    let left = 0;
    let right = arr.length - 1;
    const arr2 = [];
    while(left <= right) {
        arr2.push(arr[left]);
        if(left !== right) {
            arr2.push(arr[right]);
        }
        left++;
        right--;
    }
    for(let i = 0; i < arr2.length - 1; i++) {
        arr2[i].next = arr2[i+1];
    }
    arr2[arr2.length - 1].next = null;
};