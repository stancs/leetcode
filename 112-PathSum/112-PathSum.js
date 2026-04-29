// Last updated: 4/29/2026, 10:34:35 AM
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) {
        return false;
    }
    const getPathSum = (node, sum) => {
        console.log(`node: ${node.val}, sum=${sum}`)
        const newSum = sum + node.val;
        if(!node.left && !node.right) {
            if(newSum === targetSum) {
                return true;
            }
        }
        let leftRes = false, rightRes = false;
        if(node.left) {
            leftRes = getPathSum(node.left, newSum);
        }
        if(node.right) {
            rightRes = getPathSum(node.right, newSum);
        }
        return leftRes || rightRes;
    }
    return getPathSum(root, 0);
};