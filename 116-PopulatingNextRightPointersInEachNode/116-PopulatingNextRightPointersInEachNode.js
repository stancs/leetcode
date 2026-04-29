// Last updated: 4/29/2026, 10:34:34 AM
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// 2022-11-18
// 23:23s
// O(n)
// O(n)
var connect = function(root) {
    if(!root) {
        return null;
    }
    let queue = [ root ];
    while(queue.length !== 0) {
        const nextQueue = [];
        for(const node of queue) {
            if(node.left) {
                nextQueue.push(node.left);
            }
            if(node.right) {
                nextQueue.push(node.right);
            }
        }
        for(let i = 0; i < nextQueue.length - 1; i++) {
            nextQueue[i].next = nextQueue[i+1];
        }
        queue = nextQueue;
    }
    return root;
};