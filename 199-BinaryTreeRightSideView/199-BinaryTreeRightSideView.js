// Last updated: 4/29/2026, 10:33:10 AM
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) {
        return [];
    }
    let queue = [ root ];
    const res = [];
    while(queue.length !== 0) {
        res.push(queue[queue.length - 1].val);
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
    return res;
};