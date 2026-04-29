// Last updated: 4/29/2026, 10:29:29 AM
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
 * @return {number[]}
 */
var boundaryOfBinaryTree = function(root) {
    if(!root) {
        return [];
    }

    const result = [];

    const isLeaf = node => !node.left && !node.right;

    const addLeftBoundary = node => {
        while(node) {
            if(!isLeaf(node)) {
                result.push(node.val);
            }
            if(node.left) {
                node = node.left;
            } else {
                node = node.right;
            }
        }
    };

    const addLeaves = node => {
        if(!node) {
            return;
        }
        if(isLeaf(node)) {
            result.push(node.val);
            return;
        }
        addLeaves(node.left);
        addLeaves(node.right);
    };

    const addRightBoundary = node => {
        const temp = [];
        while(node) {
            if(!isLeaf(node)) {
                temp.push(node.val);
            }
            if(node.right) {
                node = node.right;
            } else {
                node = node.left;
            }
        }
        const rev = temp.reverse();
        result.push(...rev);
    };

    if(!isLeaf(root)) {
        result.push(root.val);
    }
    addLeftBoundary(root.left);
    addLeaves(root);
    addRightBoundary(root.right);

    return result;
};