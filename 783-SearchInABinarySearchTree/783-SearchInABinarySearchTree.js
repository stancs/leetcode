// Last updated: 4/29/2026, 10:27:51 AM
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    const helper = (node, val) => {
        if(!node) {
            return null;
        }
        
        if(node.val === val) {
            return node;
        }
        if(val < node.val) {
            return helper(node.left, val);
        } else {
            return helper(node.right, val);
        }
    }

    return helper(root, val);
};