// Last updated: 4/29/2026, 10:33:58 AM
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
// iterative
var preorderTraversal = function(root) {
    if(!root) {
        return [];
    }
    const ans = [];
    const stack = [ root ];
    let node;
    while(stack.length !== 0) {
        node = stack.pop();
        ans.push(node.val);
        if(node.right) {
            stack.push(node.right);
        }
        if(node.left) {
            stack.push(node.left);
        }
    }
    return ans;
};

// recursive
var preorderTraversal = function(root) {
    if(!root) {
        return [];
    }
    
    const ans = [];
    const dfs = (node, arr) => {
        if(node) {
            arr.push(node.val);
        }
        if(node.left) {
            dfs(node.left, arr);
        }
        if(node.right) {
            dfs(node.right, arr);
        }
    }
    dfs(root, ans);
    return ans;
};