// Last updated: 4/29/2026, 10:26:17 AM
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let queue = [[root, null]];
    while(queue.length !== 0) {
        const map = {};
        const nextQueue = [];
        for(const [node, parent] of queue) {
            map[node.val] = parent;
            if(node.left) {
                nextQueue.push([node.left, node]);
            }
            if(node.right) {
                nextQueue.push([node.right, node]);
            }
        }
        if(map[x] && map[y]) {
            return map[x] !== map[y];
        } else if(map[x] || map[y]) {
            return false;
        }
        queue = nextQueue;
    }
    return false;
};