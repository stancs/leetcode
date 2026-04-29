// Last updated: 4/29/2026, 10:28:58 AM
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
 * @return {string[][]}
 */
// 1:20:00s
// O(h * 2^h) time | O(h * 2^h) space
var printTree = function(root) {
    // BFS and get the height (h)
    // Create a empty string matrix (row: h, col: n*(n+1)/2)
    let queue = [ root ];
    let height = 0;
    while(queue.length !== 0) {
        const newQueue = [];
        for(const node of queue) {
            if(node.left) {
                newQueue.push(node.left);
            }
            if(node.right) {
                newQueue.push(node.right);
            }
        }
        queue = newQueue;
        height++;
    }
    console.log(height);
    const matrix = [];
    const row = height;
    // 1 + 2 + 2^2 + ... + 2^h = (2^h - 1) / (2 - 1)
    const col = Math.pow(2, height) - 1;
    for(let i = 0; i < row; i++) {
        const row = [];
        for(let j = 0; j < col; j++) {
            row.push('');
        }
        matrix.push(row);
    }
    updateMatrix(root, matrix, 1, height, 0, matrix[0].length - 1);
    return matrix;
};

function updateMatrix(node, matrix, height, maxHeight, left, right) {
    if(height > maxHeight) {
        return;
    }
    const middle = (left + right) / 2;
    matrix[height - 1][middle] = node.val.toString();
    if(node.left) {
        updateMatrix(node.left, matrix, height + 1, maxHeight, left, middle - 1);
    }
    if(node.right) {
        updateMatrix(node.right, matrix, height + 1, maxHeight, middle + 1, right);
    }
}