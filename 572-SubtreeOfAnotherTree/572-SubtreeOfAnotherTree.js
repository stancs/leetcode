// Last updated: 4/29/2026, 10:29:18 AM
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    const isSameStructure = (node1, node2) => {
        if(!node1 || !node2) {
            return false;
        }
        if(node1.val === node2.val) {
            let leftSame = true, rightSame = true;
            if(node1.left || node2.left) {
                leftSame = isSameStructure(node1.left, node2.left)
            }
            if(node1.right || node2.right) {
                rightSame = isSameStructure(node1.right, node2.right);
            }
            return leftSame && rightSame;
        }
        return false;
    }
    
    let res = false;
    const dfs = node => {
        if(isSameStructure(node, subRoot)) {
            res = true;
        }
        if(node.left) {
            dfs(node.left);
        }
        if(node.right) {
            dfs(node.right);
        }
    }
    dfs(root);
    return res;
};