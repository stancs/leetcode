// Last updated: 4/29/2026, 10:27:55 AM
/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const output = [];
    const dfs = node => {
        if(node) {
            output.push(node.val);
            for(const child of node.children) {
                dfs(child);
            }
        }
    }
    dfs(root);
    return output;
};