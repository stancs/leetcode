// Last updated: 4/29/2026, 10:25:20 AM
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
var lcaDeepestLeaves = function(root) {
 let queue = [root];
    const parentMap = new Map();
    let depth = 0;
    let prevQueue;
    while(queue.length !== 0) {
        prevQueue = queue;
        newQueue = [];
        for(const node of queue) {
            if(node.left) {
                parentMap.set(node.left, node);
                newQueue.push(node.left);
            }
            if(node.right) {
                parentMap.set(node.right, node);
                newQueue.push(node.right);
            }
        }
        depth++;
        queue = newQueue;
    }
    console.log(parentMap);
    console.log(prevQueue);

    let queue2 = prevQueue;
    while(queue2.length !== 1) {
        const newSet = new Set();
        for(const node of queue2) {
            const parent = parentMap.get(node);
            newSet.add(parent);
        }
        queue2 = [...newSet];
    }
    return queue2[0];    
};
