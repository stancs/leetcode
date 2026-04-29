// Last updated: 4/29/2026, 10:27:42 AM
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
// 2022-10-28
// 9:30s
// O(n)
// O(n)
var minDiffInBST = function(root) {
    const values = [];
    let queue = [ root ];
    while(queue.length !== 0) {
        const children = [];
        for(const node of queue) {
            values.push(node.val);
            if(node.left) {
                children.push(node.left);
            }
            if(node.right) {
                children.push(node.right);
            }
        }
        queue = children;
    }
    let min = Number.MAX_VALUE;
    for(let i = 0; i < values.length - 1; i++) {
        for(let j = i+1; j < values.length; j++) {
            const val1 = values[i];
            const val2 = values[j];
            const diff = abs(val1 - val2);
            if(diff < min) {
                min = diff;
            }
        }
    }
    return min;
};

function abs(x) {
    if(x >= 0) {
        return x;
    } else {
        return -x;
    }
}