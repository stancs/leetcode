// Last updated: 4/29/2026, 10:22:46 AM
/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} p
 * @param {_Node} q
 * @return {_Node}
 */
var lowestCommonAncestor = function(p, q) {
    const hash = new Map();
    let node = p;
    while(node) {
        hash.set(node, true);
        node = node.parent;
    }
    // console.log(hash);
    let curr = q;
    while(curr) {
        if(hash.get(curr)) {
            return curr;
        }
        curr = curr.parent;
    }
    return null;
};