// Last updated: 4/29/2026, 10:36:33 AM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1) {
        return list2;
    }
    if(!list2) {
        return list1;
    }
    let curr1 = list1;
    let curr2 = list2;
    let root;
    let prev;
    while(curr1 || curr2) {
        if(curr1 && curr2) {
            if(curr1.val > curr2.val) {
                if(prev) {
                    prev.next = curr2;
                    prev = prev.next;
                } else {
                    root = curr2;
                    prev = curr2;
                }
                curr2 = curr2.next;
            } else {
                if(prev) {
                    prev.next = curr1;
                    prev = prev.next;
                } else {
                    root = curr1;
                    prev = curr1;
                }
                curr1 = curr1.next;
            }
            if(!root) {
                root = prev;
            }
        } else if(curr1) {
            prev.next = curr1;
            curr1 = null;
        } else {
            prev.next = curr2;
            curr2 = null;
        }
    }
    return root;
};