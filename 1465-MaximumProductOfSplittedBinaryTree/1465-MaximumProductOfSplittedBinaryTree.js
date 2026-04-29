// Last updated: 4/29/2026, 10:24:08 AM
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
var maxProduct = function(root) {
    const map = new Map();

    const dfs = node => {
        let sum = node.val;
        if(node.left) {
            sum += dfs(node.left);
        }
        if(node.right) {
            sum += dfs(node.right);
        }
        console.log(`val: ${node.val}, sum: ${sum}`);
        map.set(node, sum);
        return sum;
    }
    dfs(root);
    console.log(map);
    const total = map.get(root);
    console.log(total);

    let max = -Infinity;
    const MOD = 1_000_000_007;
    const dfs2 = node => {
        if(node.left) {
            const sum = map.get(node.left);
            const prod = sum * (total - sum);
            console.log(`val: ${node.left.val}, sum: ${sum}, prod: ${prod}`);
            max = Math.max(max, prod);
            dfs2(node.left);
        }
        if(node.right) {
            const sum = map.get(node.right);
            const prod = sum * (total - sum);
            console.log(`val: ${node.right.val}, sum: ${sum}, prod: ${prod}`);
            max = Math.max(max, prod);
            dfs2(node.right);
        }
    }
    dfs2(root);
    console.log('max:', max);
    return max % MOD;
};