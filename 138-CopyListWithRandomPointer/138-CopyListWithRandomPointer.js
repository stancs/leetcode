// Last updated: 4/29/2026, 10:34:05 AM
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    const arr = [];
    const arr2 = [];
    
    let curr = head;
    let idx = 0;
    const map = new Map();
    let prev;
    while(curr) {
        map.set(curr, idx);
        arr.push(curr);
        const newNode = new _Node(curr.val, null, null);
        if(prev) {
            prev.next = newNode
        }
        arr2.push(newNode);
        
        prev = newNode;
        curr = curr.next;
        idx++;
    }
    console.log(arr2);
    for(let i = 0; i < arr.length; i++) {
        const src = arr[i];
        const tar = arr2[i];
        const random = arr[i].random;
        if(random) {
            const idx = map.get(random);
            tar.random = arr2[idx];
        } else {
            tar.random = null;
        }
    }
    return arr2[0];
};