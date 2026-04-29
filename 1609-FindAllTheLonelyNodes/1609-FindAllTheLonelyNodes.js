// Last updated: 4/29/2026, 10:23:29 AM
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
// 14:07s
// O(n) time | O(n) space
var getLonelyNodes = function(root) {
    const list = [];
    let queue = [ root ];
    while(queue.length !== 0) {
        const node = queue.shift();
        let numChild = 0;
        let onlyChild;
        if(node.left) {
            queue.push(node.left);
            numChild++;
            onlyChild = node.left;
        }
        if(node.right) {
            queue.push(node.right);
            numChild++;
            onlyChild = node.right;
        }
        if(numChild === 1) {
            list.push(onlyChild.val);
        }
    }
    return list;
};