// Last updated: 4/29/2026, 10:26:54 AM
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
 * @return {TreeNode}
 */
// 38:00s
// O(n) time | O(n) space
var increasingBST = function(root) {
    // Read each node left -> middle -> right
    // Store in an array
    // Reorganize the tree
    
    const arr = [];
    storeBST(root, arr);
    for(let i = 1; i < arr.length; i++) {
        arr[i-1].right = arr[i];
        arr[i-1].left = null;
    }
    arr[arr.length - 1].left = null;
    arr[arr.length - 1].right = null;
    return arr[0];
};

function storeBST(node, arr) {
//     if(!node.left && !node.right) {
//         arr.push(node);
//         return;
//     }
    
    if(node.left) {
        storeBST(node.left, arr);
    }
    arr.push(node);
    if(node.right) {
        storeBST(node.right, arr);
    }
}