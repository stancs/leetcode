// Last updated: 4/29/2026, 10:32:15 AM
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
var countUnivalSubtrees = function(root) {
    if(!root) {
        return 0;
    }
    let count = 0;
    const dfs = node => {
        if(!node.left && !node.right) {
            count++;
            return true;
        }
        
        let leftUniValue = true, rightUniValue = true;
        if(node.left) {
            if(!dfs(node.left) || node.val !== node.left.val) {
                leftUniValue = false;
            }
        }
        if(node.right) {
            if(!dfs(node.right) || node.val !== node.right.val) {
                rightUniValue = false;
            }
        }
        const res = leftUniValue && rightUniValue;
        if(res) {
            count++;
        }
        return res;
    }
    
    dfs(root);
    return count;
};