// Last updated: 4/29/2026, 10:32:33 AM
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const arr = [];
    const inOrder = node => {
        if(node.left) {
            inOrder(node.left);
        }
        arr.push(node.val);
        if(node.right) {
            inOrder(node.right);
        }
    }
    inOrder(root);
    console.log(arr);
    return arr[k-1];
};