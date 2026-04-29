// Last updated: 4/29/2026, 10:30:16 AM
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if(!root) {
        return 0;
    }
    let count = 0;
    const dfs = (node, arr) => {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === targetSum) {
                count++;
            }
        }
        if(node.left) {
            const arr2 = [...arr, 0].map(i => i + node.left.val);
            dfs(node.left, arr2);
        }
        if(node.right) {
            const arr2 = [...arr, 0].map(i => i + node.right.val);
            dfs(node.right, arr2);
        }
    }
    dfs(root, [root.val]);
    return count;
};