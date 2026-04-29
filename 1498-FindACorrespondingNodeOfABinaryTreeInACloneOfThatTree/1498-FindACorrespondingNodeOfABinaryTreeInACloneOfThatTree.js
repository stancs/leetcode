// Last updated: 4/29/2026, 10:24:01 AM
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
// 2022-11-12
// 14:51s
// O(n)
// O(1)
var getTargetCopy = function(original, cloned, target) {
    const dfs = (node1, node2) => {
        if(node1 === target) {
            return node2;
        }
        let res1, res2;
        if(node1.left) {
            res1 = dfs(node1.left, node2.left);
        }
        if(node1.right) {
            res2 = dfs(node1.right, node2.right);
        }
        return res1 || res2;
    }
    
    return dfs(original, cloned);
};
