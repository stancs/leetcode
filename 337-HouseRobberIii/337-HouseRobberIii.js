// Last updated: 4/29/2026, 10:31:07 AM
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
 * @return {number}
 */
var rob = function(root) {
    let queue = [ root ];
    const arr = [];
    while(queue.length !== 0) {
        let sum = 0;
        for(const node of queue) {
            sum += node.val;
        }
        arr.push(sum);
        
        const nextQueue = [];
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
    console.log(arr);
    const memo = {};
    const dp = i => {
        if(i >= arr.length) {
            return 0;
        }
        if(memo[i] !== undefined) {
            return memo[i];
        }
        memo[i] = Math.max(arr[i] + dp(i+2), dp(i+1));
        return memo[i];
    }
    return dp(0);
};

var rob = function(root) {
    const memo = new Map();
    const dp = node => {
        if(!node) {
            return 0;
        }
        if(memo.get(node) !== undefined) {
            return memo.get(node);
        }
        const val1 = dp(node.left) + dp(node.right);
        let val2 = node.val;
        if(node.left) {
            val2 += dp(node.left.left) + dp(node.left.right);
        }
        if(node.right) {
            val2 += dp(node.right.left) + dp(node.right.right);
        }
        memo.set(node, Math.max(val1, val2));
        return memo.get(node);
    }
    return dp(root);
}