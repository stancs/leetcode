// Last updated: 4/29/2026, 10:31:42 AM
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    const arr = [];
    const inOrder = node => {
        if(node.left) {
            inOrder(node.left);
        }
        arr.push(node);
        if(node.right) {
            inOrder(node.right);
        }
    }
    inOrder(root);
    console.log(arr);
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].val === p.val) {
            const next = i + 1;
            if(next < arr.length) {
                return arr[next];
            } else {
                return null;
            }
        }
    }
};