// Last updated: 4/29/2026, 10:21:54 AM
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
var equalToDescendants = function(root) {
    let res = 0;
    const dfs = node => {
        let sum = 0;
        if(node.left) {
            const sum1 = dfs(node.left);
            sum += sum1;
        }
        if(node.right) {
            const sum2 = dfs(node.right);
            sum += sum2;
        }
        if(sum === node.val) {
            res++;
        }
        return sum + node.val;
    }
    dfs(root);
    return res;
};