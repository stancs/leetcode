// Last updated: 4/29/2026, 10:26:40 AM
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// 6:00s
// O(n) time | O(n) space
var rangeSumBST = function(root, low, high) {
    const queue = [ root ];
    let sum = 0;
    while(queue.length !== 0) {
        const node = queue.shift();
        if(node.val >= low && node.val <= high) {
            sum += node.val;
        }
        if(node.right) {
            queue.unshift(node.right);
        }
        if(node.left) {
            queue.unshift(node.left);
        }
    }
    return sum;
};