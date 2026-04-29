// Last updated: 4/29/2026, 10:29:48 AM
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
var findFrequentTreeSum = function(root) {
    const hash = {};
    const dfs = node => {
        let sum = node.val;
        if(node.left) {
            const sum1 = dfs(node.left);
            sum += sum1;
        }
        if(node.right) {
            const sum2 = dfs(node.right);
            sum += sum2;
        }
        if(hash[sum] === undefined) {
            hash[sum] = 1;
        } else {
            hash[sum]++;
        }
        return sum;
    }
    dfs(root);
    console.log(hash);
    const keys = Object.keys(hash).sort((a, b) => hash[b] - hash[a])
    console.log(keys);
    const firstKey = keys[0];
    const res = [ firstKey ];
    for(let i = 1; i < keys.length; i++) {
        const key = keys[i];
        if(hash[key] === hash[firstKey]) {
            res.push(key);
        }
    }
    return res;
};