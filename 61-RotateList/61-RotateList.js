// Last updated: 5/5/2026, 5:20:27 PM
1/**
2 * Definition for singly-linked list.
3 * function ListNode(val, next) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.next = (next===undefined ? null : next)
6 * }
7 */
8/**
9 * @param {ListNode} head
10 * @param {number} k
11 * @return {ListNode}
12 */
13var rotateRight = function(head, k) {
14    if(head === null) {
15        return head;
16    }
17    let len = 0;
18    let curr = head;
19    const arr = [];
20    while(curr !== null) {
21        arr.push(curr);
22        len++;
23        curr = curr.next;
24    }
25    console.log(`len: ${len}`);
26    const r = k % len;
27    if(r === 0) {
28        return head;
29    }
30    console.log(`r: ${r}`);
31    const arr2 = arr.slice(len - r).concat(arr.slice(0, len - r));
32    arr2[r-1].next = arr2[r];
33    arr2[len-1].next = null;
34    return arr2[0];
35};