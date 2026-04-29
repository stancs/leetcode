// Last updated: 4/29/2026, 10:36:31 AM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists || lists.length === 0) {
        return null;
    }

    // if(!lists || lists.length === 0) {
    //     return null;
    // }
    const k = lists.length;
    const output = [];
    // console.log('k:', k);
    let isContinue = false;
    for(let i = 0; i < k; i++) {
        if(lists[i] !== null) {
            isContinue = true;
        }
    }
    if(!isContinue) {
        return null;
    }
    while(isContinue) {
        // console.log('output: ', output);
        let idx = -1;
        let min = Infinity;
        for(let i = 0; i < k; i++) {
            if(lists[i] !== null && lists[i].val < min) {
                idx = i;
                min = lists[i].val;
            }
        }
        // console.log(`idx: ${idx}`)
        output.push(lists[idx]);
        lists[idx] = lists[idx].next;
        isContinue = false;
        for(let i = 0; i < k; i++) {
            if(lists[i] !== null) {
                isContinue = true;
            }
        }
    }
    for(let i = 0; i < output.length - 1; i++) {
        output[i].next = output[i+1];
    }
    output[output.length - 1].next = null;
    return output[0];
};