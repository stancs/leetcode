// Last updated: 4/29/2026, 10:20:58 AM
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
var averageOfSubtree = function(root) {
    // for each node, we need # and sum to get average
    let res = 0;
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
        const avg = Math.floor(sum / count);
        console.log(`node.val: ${node.val}, count: ${count}, sum: ${sum}, avg: ${avg}`)
        if(avg === node.val) {
            res++;
        }
        return [count, sum];
    }
    dfs(root);
    
    return res;
};