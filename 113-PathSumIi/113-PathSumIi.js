// Last updated: 4/29/2026, 10:34:33 AM
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    if(!root) {
        return [];
    }
    const ans = [];
    const dfs = (node, path, sum) => {
        if(sum === targetSum && !node.left && !node.right) {
            ans.push(path);
            return;
        }
        if(node.left) {
            dfs(node.left, path.concat(node.left.val), sum + node.left.val);
        }
        if(node.right) {
            dfs(node.right, path.concat(node.right.val), sum + node.right.val);
        }
    }
    
    dfs(root, [ root.val ], root.val);
    return ans;
};