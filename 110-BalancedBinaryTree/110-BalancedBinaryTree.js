// Last updated: 4/29/2026, 10:34:38 AM
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
// 2022-11-10
// 30:00s
// O(n)
// O(n)
var isBalanced = function(root) {
    const dfs = node => {
        if(!node) {
            return [0, true];
        }
        const [leftDepth, leftBalanced] = dfs(node.left);
        const [rightDepth, rightBalanced] = dfs(node.right);
        const depth = Math.max(leftDepth, rightDepth) + 1;
        const isHeightBalanced = leftBalanced && rightBalanced && Math.abs(leftDepth - rightDepth) <= 1;
        return [depth, isHeightBalanced];
    }
    
    const [depth, isHeightBalanced] = dfs(root);
    return isHeightBalanced;
};