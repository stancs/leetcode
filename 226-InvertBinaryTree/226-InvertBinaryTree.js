// Last updated: 4/29/2026, 10:32:36 AM
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) {
        return root;
    }
    const invert = node => {
        const tmp = node.left;
        node.left = node.right;
        node.right = tmp;
        if(node.left) {
            invert(node.left);
        }
        if(node.right) {
            invert(node.right);
        }
        return node;
    }
    
    return invert(root);
};