// Last updated: 4/29/2026, 10:24:05 AM
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
var longestZigZag = function(root) {
    let max = 0;
    const dfs = (node, direction, len) => {
        if(len > max) {
            max = len;
        }
        if(direction === 0) {
            if(node.left) {
                dfs(node.left, -1, 1);
            }
            if(node.right) {
                dfs(node.right, 1, 1);
            }
        } else if(direction === 1) {
            if(node.left) {
                dfs(node.left, -1, len + 1);
            }
            if(node.right) {
                dfs(node.right, 1, 1);
            }
        } else {
            if(node.left) {
                dfs(node.left, -1, 1);
            }
            if(node.right) {
                dfs(node.right, 1, len+1);
            }
        }
    }
    dfs(root, 0, 0);
    return max;
};