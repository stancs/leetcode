// Last updated: 4/29/2026, 10:34:20 AM
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
var maxPathSum = function(root) {
    const parentMap = new Map();
    parentMap.set(root, null);
    const dfs = node => {
        if(node.left) {
            parentMap.set(node.left, node);
            dfs(node.left);
        }
        if(node.right) {
            parentMap.set(node.right, node);
            dfs(node.right);
        }
    }
    dfs(root);
    console.log(parentMap);
    const nodes = Array.from(parentMap.keys());
    console.log(nodes);
    console.log(nodes.map(node => node.val));
    let max = -Infinity;
    const backtrack = (node, sum, visited) => {
        // console.log(`backtrack: node ${node.val}`)
        const parent = parentMap.get(node);
        // console.log('parent: ', parent);
        // if((!parent || visited.includes(parent)) && !node.left && !node.right) {
        //     if(sum > max) {
        //         max = sum;
        //     }
        //     return;
        // }
        if(sum > max) {
            max = sum;
        }
        // console.log('visited:', visited.map(node => node.val))
        if(parent && !visited.includes(parent)) {
            visited.push(parent);
            backtrack(parent, sum + parent.val, visited);
            visited.pop();
        }
        if(node.left && !visited.includes(node.left)) {
            visited.push(node.left)
            backtrack(node.left, sum + node.left.val, visited);
            visited.pop();
        }
        if(node.right && !visited.includes(node.right)) {
            visited.push(node.right)
            backtrack(node.right, sum + node.right.val, visited);
            visited.pop();
        }
    }
    for(const node of nodes) {
        // console.log(`checking node ${node.val}`)
        backtrack(node, node.val, [node]);
    }
    return max;
};

var maxPathSum = (root) => {
    let globalMaxSum = -Infinity;

    const dfs = (node) => {
        if (node === null) return 0;

        // Recursively find the maximum path sum of the left and right subtrees
        let leftMax = Math.max(0, dfs(node.left)); // Ignore negative paths
        let rightMax = Math.max(0, dfs(node.right)); // Ignore negative paths

        // Check the maximum path sum passing through the current node
        let currentMax = node.val + leftMax + rightMax;

        // Update the global maximum path sum if needed
        globalMaxSum = Math.max(globalMaxSum, currentMax);

        // Return the maximum path sum starting from the current node
        return node.val + Math.max(leftMax, rightMax);
    };

    dfs(root);
    return globalMaxSum;
};