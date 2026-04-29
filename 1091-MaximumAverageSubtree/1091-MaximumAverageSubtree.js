// Last updated: 4/29/2026, 10:25:58 AM
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
var maximumAverageSubtree = function(root) {
    let max = -Infinity;
    const dfs = node => {
        let count = 1;
        let sum = node.val;
        if(node.left) {
            const [count1, sum1] = dfs(node.left);
            count += count1;
            sum += sum1;
        }
        if(node.right) {
            const [count2, sum2] = dfs(node.right);
            count += count2;
            sum += sum2;
        }
        const avg = sum / count;
        if(avg > max) {
            max = avg;
        }
        return [count, sum];
    }
    dfs(root);
    return max;
};