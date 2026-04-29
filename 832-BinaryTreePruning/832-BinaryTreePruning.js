// Last updated: 4/29/2026, 10:27:26 AM
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
// 25:37s
// Time O(n)
// Space O(n)
var pruneTree = function(root) {
    const prune = node => {
        if(!node) {
            return null;
        }
        
        node.left = prune(node.left);
        node.right = prune(node.right);
        
        if(!node.left && !node.right) {
            return node.val === 1? node: null;
        } else {
            return node;
        }
    }
    
    return prune(root);
};