// Last updated: 4/29/2026, 10:34:45 AM
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const isSymmetricHelper = (node1, node2) => {
        console.log(`node1: ${node1 && node1.val}, node2: ${node2 && node2.val}`)
        if(node1 === null || node2 === null) {
            return node1 === node2;
        }
        if(node1 && node2) {
            if(node1.val !== node2.val) {
                return false;
            }
        }
        let res1 = true, res2 = true;
        if(node1.left || node2.right) {
            res1 = isSymmetricHelper(node1.left, node2.right);
        }
        if(node1.right || node2.left) {
            res2 = isSymmetricHelper(node1.right, node2.left);
        }
        return res1 && res2;
    }
    
    return isSymmetricHelper(root.left, root.right);
};