// Last updated: 4/29/2026, 10:28:23 AM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
    const arr = [];
    let node = root;
    while(node !== null) {
        arr.push(node);
        node = node.next;
    }
    const len = arr.length;
    const numBasicMembers = Math.floor(len / k);
    const numBigGroups = len % k;
    const output = [];
    node = root;
    let groupIdx = 0;
    let memberIdx = 0;
    let groupHead = root;
    while(node !== null) {
        let maxNumMembers;
        if(groupIdx < numBigGroups) {
            maxNumMembers = numBasicMembers + 1;
        } else {
            maxNumMembers = numBasicMembers;
        }
        
        if(memberIdx === (maxNumMembers - 1)) {  // memberIndex === (numberBasicMembers + 1) - 1
            const next = node.next;
            node.next = null;
            output.push(groupHead);
            groupIdx++;
            memberIdx = 0;

            // go for next linked list
            node = next;
            groupHead = node;
        } else {
            node = node.next;
            memberIdx++;
        }
    }
    const outputLen = output.length;
    for(let i = 0; i < (k - outputLen); i++) {
        output.push(null);
    }
    return output;
};