// Last updated: 4/29/2026, 10:28:59 AM
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
 * @return {boolean}
 */
// 2022-11-19
// 09:48s
// O(n)
// O(n)
var findTarget = function(root, k) {
    const map = {};
    const dft = node => {
        if(map[k - node.val]) {
            return true;
        }
        map[node.val] = true;
        let leftRes = false, rightRes = false;
        if(node.left) {
            leftRes = dft(node.left);
        }
        if(node.right) {
            rightRes = dft(node.right);
        }
        return leftRes || rightRes;
    }
    return dft(root);
};