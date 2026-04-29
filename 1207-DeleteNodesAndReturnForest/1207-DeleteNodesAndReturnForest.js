// Last updated: 4/29/2026, 10:25:25 AM
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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    if(!root) {
        return [];
    }
    const output = [];
    const forest = [];
    const dfs = (node, parent) => {
        if(to_delete.includes(node.val)) {
            if(parent) {
                if(parent.left === node) {
                    parent.left = null;
                } else if(parent.right === node) {
                    parent.right = null;
                }
            }
            if(node.left) {
                if(!to_delete.includes(node.left.val)) {
                    forest.push(node.left);
                }
            }
            if(node.right) {
                if(!to_delete.includes(node.right.val)) {
                    forest.push(node.right);
                }
            }
        }
        if(node.left) {
            dfs(node.left, node);
        }
        if(node.right) {
            dfs(node.right, node);
        }
    }
    if(!to_delete.includes(root.val)) {
        forest.push(root);
    }
    dfs(root, null);
    return forest;
};