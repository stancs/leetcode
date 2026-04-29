// Last updated: 4/29/2026, 10:28:03 AM
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) {
        return [];
    }
    let queue = [ root ];
    const res = [];
    while(queue.length !== 0) {
        res.push(queue.map(x => x.val));
        const nextQueue = [];
        for(const node of queue) {
            if(node.children) {
                nextQueue.push(...node.children);
            }
        }
        queue = nextQueue;
    }
    return res;
};