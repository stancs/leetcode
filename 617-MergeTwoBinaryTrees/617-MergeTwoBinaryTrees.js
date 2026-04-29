// Last updated: 4/29/2026, 10:29:08 AM
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// 2022-11-17
// 54:59s
// O(n)
// O(1)
var mergeTrees = function(root1, root2) {
    const merge = (node1, node2) => {
        if(!node1 && !node2) {
            return null;
        }
        const node = node1 || node2;
        if(node1 && node2) {
            node.val = node1.val + node2.val;
        }
        node.left = merge(node1 && node1.left, node2 && node2.left);
        node.right = merge(node1 && node1.right, node2 && node2.right);
        return node;
    }
    
    return merge(root1, root2);
};