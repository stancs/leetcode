// Last updated: 4/29/2026, 10:34:43 AM
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) {
        return [];
    }
    let queue = [ root ];
    let direction = 1;
    const output = [];
    while(queue.length > 0) {
        const nextQueue = [];
        const arr = queue.map(node => node.val);
        if(direction > 0) {
            output.push(arr);
        } else {
            output.push(arr.reverse());
        }
        direction *= -1;
        for(const node of queue) {
            if(node.left) {
                nextQueue.push(node.left);
            }
            if(node.right) {
                nextQueue.push(node.right);
            }
        }
        queue = nextQueue;
    }
    return output;
};