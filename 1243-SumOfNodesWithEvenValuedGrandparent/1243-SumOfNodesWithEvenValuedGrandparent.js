// Last updated: 4/29/2026, 10:25:10 AM
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
 * @return {number}
 */
var sumEvenGrandparent = function(root) {
    let queue = [[root, null, null]];
    let output = 0;
    while(queue.length !== 0) {
        const nextQueue = [];
        for(const [node, parent, grandParent] of queue) {
            if(grandParent !== null && grandParent.val % 2 === 0) {
                output += node.val;
            }
            if(node.left) {
                nextQueue.push([node.left, node, parent]);
            }
            if(node.right) {
                nextQueue.push([node.right, node, parent]);
            }
        }
        queue = nextQueue;      
    }
    return output;
};