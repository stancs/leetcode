// Last updated: 4/29/2026, 10:32:01 AM
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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    if(!root) {
        return null;
    }
    const obj = {
        minDiff: Math.abs(root.val - target),
        value: root.val,
    }
    dfs(root, target, obj);
    return obj.value;
};

function dfs(node, target, obj) {
    const diff = Math.abs(node.val - target);
    if(diff < obj.minDiff) {
        obj.minDiff = diff;
        obj.value = node.val;
    }
    if(node.val < target) {
        if(node.right) {
            dfs(node.right, target, obj);
        }
    } else if(node.val > target) {
        if(node.left) {
            dfs(node.left, target, obj);
        }
    } else {
        obj.minDiff = 0;
        obj.value = node.val;
    }
}