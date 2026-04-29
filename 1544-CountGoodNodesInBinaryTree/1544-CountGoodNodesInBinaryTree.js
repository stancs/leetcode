// Last updated: 4/29/2026, 10:23:50 AM
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
var goodNodes = function(root) {
    if(!root) {
        return 0;
    }
    const map = new Map();
    let count = 0;
    const dfs = (node, max) => {
        map.set(node, max);
        if(node.val >= max) {
            count++;
        }
        if(node.left) {
            dfs(node.left, Math.max(max, node.left.val));
        }
        if(node.right) {
            dfs(node.right, Math.max(max, node.right.val));
        }
    }

    dfs(root, root.val);
    return count;
};