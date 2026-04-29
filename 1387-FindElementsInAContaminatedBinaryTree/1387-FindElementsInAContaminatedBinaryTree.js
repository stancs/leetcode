// Last updated: 4/29/2026, 10:24:40 AM
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
 */
var FindElements = function(root) {
    this.hash = {};
    let queue = [ root ];
    root.val = 0;
    this.hash[root.val] = true;
    while(queue.length > 0) {
        const nextQueue = [];
        for(const node of queue) {
            const x = node.val;
            if(node.left) {
                node.left.val = 2 * x + 1;
                this.hash[node.left.val] = true;
                nextQueue.push(node.left);
            }
            if(node.right) {
                node.right.val = 2 * x + 2;
                this.hash[node.right.val] = true;
                nextQueue.push(node.right);
            }
        }
        queue = nextQueue;
    }
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    return this.hash[target] !== undefined;
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */