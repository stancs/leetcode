// Last updated: 4/29/2026, 10:32:08 AM
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
 * @return {string[]}
 */
// 7:43s
var binaryTreePaths = function(root) {
    if(!root) {
        return [];
    }
    const queue = [ [root, `${root.val}`]];
    const output = [];
    while(queue.length !== 0) {
        const [node, path] = queue.shift();
        if(!node.left && !node.right) {
            output.push(path);
        } else {
            const children = [];
            if(node.left) {
                children.push([node.left, `${path}->${node.left.val}`]);
            }
            if(node.right) {
                children.push([node.right, `${path}->${node.right.val}`]);
            }
            queue.push(...children);
        }
    }
    return output;
};