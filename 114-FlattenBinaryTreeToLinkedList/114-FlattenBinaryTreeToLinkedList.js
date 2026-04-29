// Last updated: 4/29/2026, 10:34:31 AM
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
var flatten = function(root) {
    if(!root) {
        return;
    }
    const path = [];
    const preOrder = node => {
        path.push(node);
        if(node.left) {
            preOrder(node.left);
        }
        if(node.right) {
            preOrder(node.right);
        }
    }
    preOrder(root);
    for(let i = 0; i < path.length - 1; i++) {
        const currNode = path[i];
        const nextNode = path[i+1];
        currNode.left = null;
        currNode.right = nextNode;
    }
    const lastNode = path[path.length - 1];
    lastNode.left = null;
    lastNode.right = null;
    const pathNum = path.map(node => node.val);
    console.log(pathNum);
};