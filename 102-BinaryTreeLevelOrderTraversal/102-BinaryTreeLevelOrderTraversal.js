// Last updated: 4/29/2026, 10:34:44 AM
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) {
        return [];
    }
    let queue = [ root ];
    const output = [];
    while(queue.length > 0) {
        const nextQueue = [];
        const arr = [];
        for(const node of queue) {
            arr.push(node.val);
            if(node.left) {
                nextQueue.push(node.left);
            }
            if(node.right) {
                nextQueue.push(node.right);
            }
        }
        output.push(arr);
        queue = nextQueue;
    }
    return output;
};