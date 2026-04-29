// Last updated: 4/29/2026, 10:34:48 AM
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let firstNode;
    let secondNode;
    let prevNode;
    const inOrderTraverse = node => {
        if(node.left) {
            inOrderTraverse(node.left)
        }
        if(prevNode && prevNode.val >= node.val) {
            if(!firstNode) {
                firstNode = prevNode;
            }
            secondNode = node;
        }
        prevNode = node;
        if(node.right) {
            inOrderTraverse(node.right);
        }
    }
    inOrderTraverse(root);
    const temp = firstNode.val;
    firstNode.val = secondNode.val;
    secondNode.val = temp;
};