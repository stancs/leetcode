// Last updated: 4/29/2026, 10:25:53 AM
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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    const dfs = (node, addition) => {
        console.log(`node.val: ${node.val}, addition: ${addition}`)
        let sum = node.val + addition;

        if(node.right) {
            sum += dfs(node.right, addition);
        }
        if(node.left) {
            dfs(node.left, sum);
        }
        console.log(`return from ${node.val}: ${sum}`)
        node.val = sum;
        return sum;
    }
    dfs(root, 0);
    return root;
};

var bstToGst = function(root) {
    let sum = 0;
    const dfs = node => {
        if(node.right) {
            dfs(node.right);
        }
        sum += node.val;
        node.val = sum;
        if(node.left) {
            dfs(node.left);
        }
    }
    dfs(root);
    return root;
}