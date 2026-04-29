// Last updated: 4/29/2026, 10:26:36 AM
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
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    if(!root1 && !root2) {
        return true;
    } else if(!root1 || !root2) {
        return false;
    }
    const isFlipEquivalent = (node1, node2) => {
        if(!node1 && !node2) {
            return true;
        } else if(!node1 || !node2) {
            return false;
        }
        if(node1.val !== node2.val) {
            return false;
        }
        const case1 = isFlipEquivalent(node1.left, node2.right) && isFlipEquivalent(node1.right, node2.left);
        const case2 = isFlipEquivalent(node1.left, node2.left) && isFlipEquivalent(node1.right, node2.right);
        return case1 || case2;
    }
    return isFlipEquivalent(root1, root2);
}