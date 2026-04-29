// Last updated: 4/29/2026, 10:23:18 AM
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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
    // find leaves (Set)
    // find parents for each node (Map)
    // from each leaf, find the distance to other leaves
    const leaves = new Set();
    const map = new Map();
    const dfs = (node, parent) => {
        map.set(node, parent);
        if(!node.left && !node.right) {
            leaves.add(node);
        }
        if(node.left) {
            dfs(node.left, node);
        }
        if(node.right) {
            dfs(node.right, node);
        }
    }
    
    dfs(root, null);
    
    // console.log([...leaves].map(node => node.val));
    // console.log(map)
    
    let count = 0;
    
    const dfs2 = (node, visited, len) => {
        // three ways (parent, left, right)
        // console.log(`node: ${node.val}, visited: ${[...visited].map(node => node.val)}, len: ${len}`)
        if(len > distance) {
            return;
        }
        if(len !== 0 && leaves.has(node)) {
            count++;
            return;
        }
        visited.add(node);
        const parent = map.get(node);
        if(parent && !visited.has(parent)) {
            visited.add(parent);
            dfs2(parent, visited, len + 1)
        }
        if(node.left && !visited.has(node.left)) {
            visited.add(node.left);
            dfs2(node.left, visited, len + 1);
        }
        if(node.right && !visited.has(node.right)) {
            visited.add(node.right);
            dfs2(node.right, visited, len + 1);
        }
    }
    
    for(const leaf of leaves) {
        const visited = new Set();
        dfs2(leaf, visited, 0);
    }
    console.log(`count: ${count}`)
    return count / 2;
};