// Last updated: 4/29/2026, 10:33:22 AM
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
var BSTIterator = function(root) {
    this.size = 0;
    this.curr = -1;
    if(!root) {
        return;
    }
    this.path = [];
    const inOrder = node => {
        if(node.left) {
            inOrder(node.left);
        }
        this.path.push(node);
        if(node.right) {
            inOrder(node.right);
        }
    }
    inOrder(root);
    this.size = this.path.length;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    const currNode = this.path[this.curr + 1];
    this.curr++;
    return currNode.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.curr + 1 <= this.size - 1;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */