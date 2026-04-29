// Last updated: 4/29/2026, 10:26:22 AM
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
var verticalTraversal = function(root) {
    const map = {};
    let queue = [ [root, 0, 0]];
    while(queue.length > 0) {
        const nextQueue = [];
        for(const [node, row, col] of queue) {
            if(!map[col]) {
                map[col] = [];
            }
            map[col].push([node.val, row, col]);
            if(node.left) {
                nextQueue.push([node.left, row + 1, col - 1]);
            }
            if(node.right) {
                nextQueue.push([node.right, row + 1, col + 1]);
            }
        }
        queue = nextQueue;
    }
    console.log(map);
    const output = Object.keys(map).sort((a, b) => Number(a) - Number(b)).map(key => map[key].sort((a, b) => {
        if(a[1] !== b[1]) {
            return a[1] - b[1];
        } else {
            return a[0]-b[0];
        }
    }));
    console.log(output);
    return output.map(list => list.map(i => i[0]));
};