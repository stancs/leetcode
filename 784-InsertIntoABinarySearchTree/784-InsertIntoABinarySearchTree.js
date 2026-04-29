// Last updated: 4/29/2026, 10:27:48 AM
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
 * @param {number} val
 * @return {TreeNode}
 */
// 2022-11-02
// 4:13s
// O(log(n))
// O(1)
var insertIntoBST = function(root, val) {
    if(!root) {
        return new TreeNode(val);
    }
    insertHelper(root, val);
    return root;
};

function insertHelper(node, val) {
    if(node.val > val) {
        if(node.left) {
            insertHelper(node.left, val);
        } else {
            node.left = new TreeNode(val);
        }
    } else {
        if(node.right) {
            insertHelper(node.right, val);
        } else {
            node.right = new TreeNode(val);
        }
    }
}