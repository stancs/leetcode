// Last updated: 4/29/2026, 10:21:18 AM
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
// 23:10s
// O(n)
// O(n)
var createBinaryTree = function(descriptions) {
    const map = {};
    for(const [parent, child, isLeft] of descriptions) {
        // console.log(parent, child, isLeft);
        let parentNode, childNode;
        if(map[parent] === undefined) {
            parentNode = new TreeNode(parent, null, null);
            map[parent] = [parentNode, false];
        } else {
            parentNode = map[parent][0];
        }
        if(map[child] === undefined) {
            childNode = new TreeNode(child, null,null);
            map[child] = [childNode, true];
        } else {
            childNode = map[child][0];
            map[child][1] = true;
        }
        if(isLeft) {
            parentNode.left = childNode;
        } else {
            parentNode.right = childNode;
        }
    }
    // console.log(map);
    const keys = Object.keys(map);
    for(const key of keys) {
        if(!map[key][1]) {
            return map[key][0];
        }
    }
};