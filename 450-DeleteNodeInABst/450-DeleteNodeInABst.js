// Last updated: 4/29/2026, 10:30:06 AM
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    const minValue = node => {
        let curr = node;
        while(curr.left !== null) {
            curr = curr.left;
        }
        return curr.val;
    }

    const deleteHelper = (node, key) => {
        if(!node) {
            return node;
        }
        if(key < node.val) {
            node.left = deleteHelper(node.left, key);
        } else if(key > node.val) {
            node.right = deleteHelper(node.right, key);
        } else {
            if(!node.left) {
                return node.right;
            } else if(!node.right) {
                return node.left;
            }

            node.val = minValue(node.right);

            node.right = deleteHelper(node.right, node.val);
        }
        return node;
    }

    return deleteHelper(root, key);
};