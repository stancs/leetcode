// Last updated: 4/29/2026, 10:35:02 AM
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
var deleteDuplicates = function(head) {
    if(!head) {
        return head;
    }
    const arr = [];
    let curr = head;
    const map = {};
    let temp;
    while(curr) {
        if(map[curr.val] === undefined) {
            map[curr.val] = true;
            if(temp) {
                console.log(`push ${temp.val}`)
                arr.push(temp);
            }
            temp = curr;
        } else {
            temp = null;
        }
        curr = curr.next;
    }
    if(temp) {
        arr.push(temp);
    }
    const len = arr.length;
    if(len === 0) {
        return null;
    }
    if(len === 2) {
        arr[0].next = arr[1];
    } else {
        for(let i = 0; i < arr.length - 1; i++) {
            arr[i].next = arr[i+1];
        }
    }
    arr[arr.length - 1].next = null;
    console.log(`arr:`, arr);
    return arr[0];
};