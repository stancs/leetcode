// Last updated: 4/29/2026, 10:31:32 AM
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
var longestConsecutive = function(root) {
    if(!root) {
        return 0;
    }
    let max = 0;
    const dfs = (node, val, len) => {
        if(len > max) {
            max = len;
        }
        if(node.left) {
            if(node.left.val === val + 1) {
                dfs(node.left, val+1, len+1);
            } else {
                dfs(node.left, node.left.val, 1);
            }
        }
        if(node.right) {
            if(node.right.val === val + 1) {
                dfs(node.right, val+1, len+1);
            } else {
                dfs(node.right, node.right.val, 1);
            }
        }
    }
    dfs(root, root.val, 1);
    return max;
};