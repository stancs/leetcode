// Last updated: 4/29/2026, 10:22:56 AM
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
 * @param {TreeNode} u
 * @return {TreeNode}
 */
var findNearestRightNode = function(root, u) {
    if(root === u) {
        return null;
    }
    let queue = [root];
    let included = false;
    while(queue.length > 0) {
        const nextQueue = [];
        for(const node of queue) {
            if(node.left) {
                if(node.left === u) {
                    included = true;
                }
                nextQueue.push(node.left);
            }
            if(node.right) {
                if(node.right === u) {
                    included = true;
                }
                nextQueue.push(node.right);
            }
        }
        if(included) {
            for(let i = 0; i < nextQueue.length; i++) {
                if(nextQueue[i] === u) {
                    if(i < nextQueue.length - 1) {
                        return nextQueue[i+1];
                    } else {
                        return null;
                    }
                }
            }
        }
        queue = nextQueue;
    }
};