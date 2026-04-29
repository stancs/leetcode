// Last updated: 4/29/2026, 10:33:43 AM
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

var upsideDownBinaryTree = function(root) {
    if(!root) {
        return root;
    }

    const upsideDownHelper = node => {
        if(!node || !node.left) {
            return node;
        }

        const newRoot = upsideDownHelper(node.left);

        node.left.left = node.right;
        node.left.right = node;

        node.left = null;
        node.right = null;

        return newRoot;
    }

    return upsideDownHelper(root);
};