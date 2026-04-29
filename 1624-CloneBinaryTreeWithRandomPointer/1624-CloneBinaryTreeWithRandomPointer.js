// Last updated: 4/29/2026, 10:23:25 AM
/**
 * // Definition for a Node.
 * function Node(val, left, right, random) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.random = random === undefined ? null : random;
 * };
 */

/**
 * @param {Node} root
 * @return {NodeCopy}
 */
var copyRandomBinaryTree = function(root) {
    const visited = new Map();
    const copyHelper = node => {
        if(!node) {
            return node;
        }
        
        if(visited.get(node) !== undefined) {
            return visited.get(node);
        }
        
        const nodeCopy = new NodeCopy(node.val, null, null, null)
        visited.set(node, nodeCopy);
        
        nodeCopy.left = copyHelper(node.left);
        nodeCopy.right = copyHelper(node.right);
        nodeCopy.random = copyHelper(node.random);
        
        return nodeCopy;
    }
    
    return copyHelper(root);
};