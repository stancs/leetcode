// Last updated: 4/29/2026, 10:34:13 AM
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
var sumNumbers = function(root) {
    if(!root) {
        return 0;
    }
    let sum = 0;
    let queue = [ [root, root.val.toString()]];
    while(queue.length > 0) {
        const nextQueue = [];
        for(const [node, str] of queue) {
            if(!node.left && !node.right) {
                sum += parseInt(str);
            }
            if(node.left) {
                nextQueue.push([node.left, str + node.left.val.toString()]);
            }
            if(node.right) {
                nextQueue.push([node.right, str + node.right.val.toString()]);
            }
        }
        queue = nextQueue;
    }
    return sum;
};