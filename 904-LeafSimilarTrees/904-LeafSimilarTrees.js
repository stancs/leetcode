// Last updated: 4/29/2026, 10:27:06 AM
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const seq1 = [], seq2 = [];
    function dfs(node, seq) {
        if(!node.left && !node.right) {
            seq.push(node.val);
            return;
        }
        if(node.left) {
            dfs(node.left, seq);
        }
        if(node.right) {
            dfs(node.right, seq);
        }
    }
    dfs(root1, seq1);
    console.log(seq1);
    dfs(root2, seq2);
    console.log(seq2);
    if(seq1.length !== seq2.length) {
        return false;
    }
    for(let i = 0; i < seq1.length; i++) {
        if(seq1[i] !== seq2[i]) {
            return false;
        }
    }
    return true;
};