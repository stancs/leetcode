// Last updated: 4/29/2026, 10:32:28 AM
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const commonAncestorHelper = (node, p, q) => {
        if(node.val > p.val && node.val > q.val) {
            return commonAncestorHelper(node.left, p, q);
        }
        
        if(node.val < p.val && node.val < q.val) {
            return commonAncestorHelper(node.right, p, q);
        }
        return node;
    }
    return commonAncestorHelper(root, p, q);
};