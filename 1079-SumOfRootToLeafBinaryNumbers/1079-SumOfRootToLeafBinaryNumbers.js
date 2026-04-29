// Last updated: 4/29/2026, 10:26:05 AM
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
var sumRootToLeaf = function(root) {
    const list = [];
    const dfs = (node, arr) => {
        if(!node.left && !node.right) {
            list.push(arr);
        }
        if(node.left) {
            dfs(node.left, [...arr, node.left.val]);
        }
        if(node.right) {
            dfs(node.right, [...arr, node.right.val]);
        }
    }
    dfs(root, [ root.val ]);
    console.log(list);
    const binaryToDecimal = arr => {
        let sum = 0;
        for(let i = 0; i < arr.length; i++) {
            const num = arr[i];
            sum += num;
            if(i !== arr.length - 1) {
                sum *= 2;
            }
        }
        return sum;
    }
    const sumList = list.map(binaryToDecimal);
    console.log(sumList);
    let sum = 0;
    for(const num of sumList) {
        sum += num;
    }
    
    return sum;
};