// Last updated: 4/29/2026, 10:31:22 AM
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
var verticalOrder = function(root) {
    if(!root) {
        return [];
    }
    const map = {};
    
    let queue = [ [root, 0] ];
    while(queue.length !== 0) {
        const nextQueue = [];
        for(const [node, col] of queue) {
            if(map[col] === undefined) {
                map[col] = [];
            }
            map[col].push(node.val);
            if(node.left) {
                nextQueue.push([node.left, col - 1]);
            }
            if(node.right) {
                nextQueue.push([node.right, col + 1]);
            }
        }
        queue = nextQueue;
    }
    console.log(map);
    const sortedKeys = Object.keys(map).map(strKey => Number(strKey)).sort((a, b) => a - b);
    console.log(sortedKeys);
    const output = sortedKeys.map(key => map[key.toString()]);

    console.log(output);

    return output;
};