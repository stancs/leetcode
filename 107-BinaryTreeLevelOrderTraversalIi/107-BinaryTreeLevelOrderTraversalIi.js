// Last updated: 4/29/2026, 10:34:40 AM
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
// 6:03s
// O(n) time | O(1) space
var levelOrderBottom = function(root) {
    if(!root) {
        return [];
    }
    const stack = [ [ root.val ] ];
    let arr = [ root ];
    while(arr.length !== 0) {
        const newArr = [];
        const traversal = [];
        for(const node of arr) {
            if(node.left) {
                newArr.push(node.left);
                traversal.push(node.left.val);
            }
            if(node.right) {
                newArr.push(node.right);
                traversal.push(node.right.val);
            }
        }
        arr = newArr;
        if(traversal.length !== 0) {
            stack.unshift(traversal);
        }
    }
    return stack;
};