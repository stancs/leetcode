// Last updated: 4/29/2026, 10:20:41 AM
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
var evaluateTree = function(root) {
    const dfs = node => {
        if(!node.left && !node.right) {
            return node.val === 1;
        }
        if(node.val === 2) {
            return dfs(node.left) || dfs(node.right);
        } else {
            return dfs(node.left) && dfs(node.right);
        }
    }   
    return dfs(root);
};