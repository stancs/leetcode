// Last updated: 4/29/2026, 10:29:21 AM
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
var findTilt = function(root) {
    // get sum of all subtress + itself and store it to Map
    // update the value for each node
    if(!root) {
        return 0;
    }
    const map = new Map(); // key: node ref, value: sum
    
    const dfs1 = node => {
        const obj = map.get(node);
        if(obj !== undefined) {
            return obj;
        }
        let leftSum = 0, rightSum = 0;
        if(node.left) {
            leftSum = dfs1(node.left);
        }
        if(node.right) {
            rightSum = dfs1(node.right);
        }
        const sum = node.val + leftSum + rightSum;
        map.set(node, sum);
        return sum;
    }
    
    dfs1(root);
    // console.log(map);
    
    let sum = 0;
    const dfs2 = node => {
        const leftSum = node.left? map.get(node.left): 0;
        const rightSum = node.right? map.get(node.right): 0;
        sum += Math.abs(leftSum - rightSum);
        if(node.left) {
            dfs2(node.left);
        }
        if(node.right) {
            dfs2(node.right);
        }
    }
    
    dfs2(root);
    
    return sum;
};

var findTilt = function(root) {
    let sum = 0;
    const dfs = node => {
        if(!node) {
            return 0;
        }
        const leftSum = dfs(node.left);
        const rightSum = dfs(node.right);
        const tilt = Math.abs(leftSum - rightSum);
        sum += tilt;
        
        return node.val + leftSum + rightSum;
    }
    dfs(root);
    
    return sum;
}

