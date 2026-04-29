// Last updated: 4/29/2026, 10:23:02 AM
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
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
    // doing bfs, get all the nodes in the same level
    // if the level is odd, it should stricly increasing
    // if the level is even, it should strictly decreasing
    const areDecreasingEvenIntegers = queue => {
        let prev;
        for(const node of queue) {
            if(node.val % 2 === 1) {
                return false;
            }
            if(prev !== undefined) {
                if(prev.val <= node.val) {
                    return false;
                }
            }
            prev = node;
        }
        return true;
    }
    const areIncreasingOddIntegers = queue => {
        let prev;
        for(const node of queue) {
            if(node.val % 2 === 0) {
                return false;
            }
            if(prev !== undefined) {
                if(prev.val >= node.val) {
                    return false;
                }
            }
            prev = node;
        }
        return true;
    }
    let queue = [root];
    let level = 0;
    while(queue.length !== 0) {
        if(level % 2 === 1) {
            // odd
            if(!areDecreasingEvenIntegers(queue)) {
                return false;
            }
        } else {
            // even
            if(!areIncreasingOddIntegers(queue)) {
                return false;
            }
        }
        const nextQueue = [];
        for(const node of queue) {
            if(node.left) {
                nextQueue.push(node.left);
            }
            if(node.right) {
                nextQueue.push(node.right);
            }
        }
        level++;
        queue = nextQueue;
    }
    return true;
};