// Last updated: 4/29/2026, 10:34:41 AM
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
var maxDepth = function(root) {
    const dfs = (node, depth) => {
        if(!node) {
            return depth - 1;
        }
        let left = depth, right = depth;
        if(node.left) {
            left = dfs(node.left, depth + 1);
        }
        if(node.right) {
            right = dfs(node.right, depth + 1);
        }
        return Math.max(left, right);
    }
    return dfs(root, 1);
};