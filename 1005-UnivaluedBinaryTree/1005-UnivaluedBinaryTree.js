// Last updated: 4/29/2026, 10:26:34 AM
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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    if(!root) {
        return true;
    }
    let queue = [ root ];
    while(queue.length !== 0) {
        const nextQueue = [];
        for(const node of queue) {
            if(node.val !== root.val) {
                return false;
            }
            if(node.left) {
                nextQueue.push(node.left);
            }
            if(node.right) {
                nextQueue.push(node.right);
            }
        }
        queue = nextQueue;
    }
    return true;
};