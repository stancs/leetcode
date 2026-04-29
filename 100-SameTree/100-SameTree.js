// Last updated: 4/29/2026, 10:34:46 AM
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && !q) {
        return true;
    } else if(!p || !q) {
        return false;
    }
    
    const compare = (n1, n2) => {
        if((!n1 && n2) || (n1 && !n2)) {
            return false;
        }
        if(n1.val !== n2.val) {
            return false;
        }
        if(n1.left || n2.left) {
            if(!compare(n1.left, n2.left)) {
                return false;
            }
        }
        if(n1.right || n2.right) {
            if(!compare(n1.right, n2.right)) {
                return false;
            }
        }
        return true;
    }
    
    return compare(p, q);
};