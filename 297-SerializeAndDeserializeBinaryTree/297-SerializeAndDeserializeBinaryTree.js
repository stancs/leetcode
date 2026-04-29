// Last updated: 4/29/2026, 10:31:33 AM
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const sehelper = node => {
        if(!node) {
            return 'null';
        }
        const leftSerialized = sehelper(node.left);
        const rightSerialized = sehelper(node.right);
        
        const res = `${node.val},${leftSerialized},${rightSerialized}`;
        console.log(res);
        return res;
        // return `${node.val},${leftSerialized},${rightSerialized}`;
    }
    return sehelper(root);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    console.log(data);
    const arr = data.split(',');
    
    function buildTree() {
        const val = arr.shift();
        if(val === 'null') {
            return null;
        }
        const node = new TreeNode(parseInt(val));
        node.left = buildTree();
        node.right = buildTree();
        
        return node;
    }
    
    return buildTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */