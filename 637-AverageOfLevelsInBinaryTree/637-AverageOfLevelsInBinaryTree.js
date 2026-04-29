// Last updated: 4/29/2026, 10:29:06 AM
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
var averageOfLevels = function(root) {
    let queue = [ root ];
    const output = [];
    while(queue.length > 0) {
        const nextQueue = [];
        let sum = 0;
        for(const node of queue) {
            sum += node.val;
            if(node.left) {
                nextQueue.push(node.left);
            }
            if(node.right) {
                nextQueue.push(node.right);
            }
        }
        const av = sum / queue.length;
        output.push(av);
        queue = nextQueue;
    }
    return output;
};