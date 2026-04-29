// Last updated: 4/29/2026, 10:19:16 AM
/**
 * Definition for a rope tree node.
 * class RopeTreeNode {
 *     constructor(len, val, left, right) {
 *         this.len = (len===undefined ? 0 : len);
 *         this.val = (val===undefined ? "" : val);
 *         this.left = (left===undefined ? null : left);
 *         this.right = (right===undefined ? null : right);
 *     }
 * }
 */
/**
 * @param {RopeTreeNode} root
 * @param {number} k
 * @return {character}
 */
var getKthCharacter = function(root, k) {
    const getStr = node => {
        if(!node.left && !node.right) {
            return node.val;
        }
        let leftStr = '', rightStr = '';
        if(node.left) {
            leftStr = getStr(node.left);
        }
        if(node.right) {
            rightStr = getStr(node.right);
        }
        return leftStr + rightStr;
    }
    const str = getStr(root);
    console.log(str);
    return str[k-1];
};