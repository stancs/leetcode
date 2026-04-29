// Last updated: 4/29/2026, 10:33:55 AM
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
var postorderTraversal = function(root) {
    if(!root) {
        return [];
    }
    const ans = [];
    const dfs = (node, arr) => {
        if(node.left) {
            dfs(node.left, arr);
        }
        if(node.right) {
            dfs(node.right, arr);
        }
        arr.push(node.val);
    }
    dfs(root, ans);
    return ans;
};