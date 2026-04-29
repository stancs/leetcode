// Last updated: 4/29/2026, 10:25:09 AM
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
// 2022-11-01
// 05:00s
// O(n)
// O(n)
var deepestLeavesSum = function(root) {
    let queue = [ root ];
    let sum = 0;
    while(queue.length !== 0) {
        const newQueue = [];
        sum = 0;
        for(const node of queue) {
            sum += node.val;
            if(node.left) {
                newQueue.push(node.left);
            }
            if(node.right) {
                newQueue.push(node.right);
            }
        }
        queue = newQueue;
    }
    return sum;
};