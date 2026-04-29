// Last updated: 4/29/2026, 10:25:52 AM
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
var maxLevelSum = function(root) {
    if(!root) {
        return 0;
    }
    let queue = [ root ];
    let level = 1;
    let maxSum;
    let resLevel = 1;
    while(queue.length !== 0) {
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
        if(maxSum === undefined || sum > maxSum) {
            maxSum = sum;
            resLevel = level;
        }
        level++;
        queue = nextQueue;
    }
    return resLevel;
};