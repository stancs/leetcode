// Last updated: 4/29/2026, 10:20:21 AM
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
// 2022-10-28
// 32:52s
// O(n)
// O(n)
var reverseOddLevels = function(root) {
    let level = 0;
    let queue = [ root ];
    while(queue.length !== 0) {
        const children = [];
        for(let i = 0; i < queue.length; i++) {
            const node = queue[i];
            if(level % 2 === 1 && i < Math.floor(queue.length / 2)) {
                const matchNode = queue[queue.length - 1 - i];
                const tmp = node.val;
                node.val = matchNode.val;
                matchNode.val = tmp;
            }
            if(node.left) {
                children.push(node.left);
            }
            if(node.right) {
                children.push(node.right);
            }
        }
        level++;
        queue = children; 
    }
    return root;
};