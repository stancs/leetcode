// Last updated: 4/29/2026, 10:28:51 AM
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
var findSecondMinimumValue = function(root) {
    const list = [];
    const dfs = node => {
        if(node.left) {
            dfs(node.left);
        }
        if(!list.includes(node.val)) {
            list.push(node.val);
        }
        if(node.right) {
            dfs(node.right);
        }
    }
    
    dfs(root);
    
    console.log(list);
    
    if(list.length < 2) {
        return -1;
    }
    return list[1];
};

var findSecondMinimumValue = function(root) {
    let min = Infinity;
    const list = new Set();
    const dfs = node => {
        list.add(node.val);
        if(node.left) {
            dfs(node.left);
        }
        if(node.right) {
            dfs(node.right);
        }
    }
    dfs(root);
    const sorted = [...list].sort((a, b) => a-b)
    console.log(sorted);
    
    if(sorted.length < 2) {
        return -1;
    }
    return sorted[1];
}