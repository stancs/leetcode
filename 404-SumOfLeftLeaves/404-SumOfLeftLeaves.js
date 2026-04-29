// Last updated: 4/29/2026, 10:30:31 AM
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
// 13:24s
// O(n) time | O(1) space
var sumOfLeftLeaves = function(root) {
    if(!root) {
        return 0;
    }
    let sum = 0;
    let queue = [ root ];
    while(queue.length !== 0) {
        const node = queue.shift();
        
        if(node.left) {
            if(!node.left.left && !node.left.right) {
                sum += node.left.val;    
            } else {
                queue.push(node.left);
            }
        }
        if(node.right) {
            queue.push(node.right);
        }
    }
    return sum;
};