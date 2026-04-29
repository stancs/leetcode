// Last updated: 4/29/2026, 10:29:40 AM
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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    const arr = [];
    function inOrder(node, arr) {
        if(node.left) {
            inOrder(node.left, arr);
        }
        arr.push(node.val);
        if(node.right) {
            inOrder(node.right, arr);
        }
    }
    inOrder(root, arr);
    console.log(arr);
    let min = Infinity;
    for(let i = 0; i < arr.length - 1; i++) {
        const diff = arr[i+1] - arr[i];
        if(diff < min) {
            min = diff;
        }
    }
    return min;
};