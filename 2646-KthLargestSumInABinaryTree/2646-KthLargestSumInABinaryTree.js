// Last updated: 4/29/2026, 10:19:51 AM
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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    let queue = [root];
    const arr = [];
    while(queue.length > 0) {
        const nextQueue = [];
        let sum = 0;
        for(const node of queue) {
            sum += node.val;
            if(node.left) {
                nextQueue.push(node.left);
            }
            if(node.right) {
                nextQueue.push(node.right);
            }
        }
        arr.push(sum);
        sum = 0;
        queue = nextQueue;
    }
    arr.sort((a, b) => b - a);
    if(arr.length < k) {
        return -1;
    }
    return arr[k-1];
};