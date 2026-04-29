// Last updated: 4/29/2026, 10:29:00 AM
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
 * @return {TreeNode[]}
 */
// 1:00:00s
// O(n^2) time | O(n^2) space
var findDuplicateSubtrees = function(root) {
    if(!root) {
        return [];
    }
    const hash = {};
    const duplicateNodes = [];
    findDuplicateHelper(root, hash, duplicateNodes);
    return duplicateNodes;
};

function findDuplicateHelper(node, hash, duplicateNodes) {
    if(!node) {
        return '*';
    }
    
    const leftStr = findDuplicateHelper(node.left, hash, duplicateNodes);
    const rightStr = findDuplicateHelper(node.right, hash, duplicateNodes);
    const serialized = `${node.val},${leftStr},${rightStr}`;
    console.log(`${node.val}: ${serialized}`);
    if(hash[serialized]) {
        if(hash[serialized] === 1) {
            duplicateNodes.push(node);    
        }
        hash[serialized]++;     // Do not want to count more than twice
    } else {
        hash[serialized] = 1;
    }
    return serialized;
}