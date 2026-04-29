// Last updated: 4/29/2026, 10:34:28 AM
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if(!root) {
        return root;
    }
    let queue = [root];
    while(queue.length !== 0) {
        for(let i = 0; i < queue.length-1; i++) {
            const currNode = queue[i];
            const nextNode = queue[i+1];
            currNode.next = nextNode;
        }
        const nextQueue = [];
        for(const node of queue) {
            if(node.left) {
                nextQueue.push(node.left);
            }
            if(node.right) {
                nextQueue.push(node.right);
            }
        }
        queue = nextQueue;
    }
    return root;
};