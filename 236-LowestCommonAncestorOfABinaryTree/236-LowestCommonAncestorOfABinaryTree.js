// Last updated: 4/29/2026, 10:32:27 AM
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function(root, p, q) {
    if(!root) {
        return null;
    }
    const parentMap = new Map();
    let parent = null;
    let node = root;
    const dfs = (node, parent) => {
        parentMap.set(node, parent);
        if(node.left) {
            dfs(node.left, node);
        }
        if(node.right) {
            dfs(node.right, node);
        }
    }
    dfs(root, null);
    const keys = parentMap.keys();
    for(const key of keys) {
        const parent = parentMap.get(key);
        // console.log(`key: ${key.val}: parent: ${parent?.val || 'null'}`);
    }

    node = p;
    const arr1 = [];
    while(node) {
        arr1.push(node);
        node = parentMap.get(node);
    }

    node = q;
    const arr2 = [];
    while(node) {
        arr2.push(node);
        node = parentMap.get(node);
    }

    let idx1 = arr1.length - 1;
    let idx2 = arr2.length - 1;
    while(arr1[idx1] === arr2[idx2]) {
        idx1--;
        idx2--;
    }
    return arr1[idx1 + 1];
}