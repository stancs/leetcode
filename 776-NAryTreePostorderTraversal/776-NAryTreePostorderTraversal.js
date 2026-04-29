// Last updated: 4/29/2026, 10:27:54 AM
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const output = [];
    const dfs = node => {
        if(!node) {
            return;
        }
        for(const child of node.children) {
            dfs(child);
        }
        output.push(node.val);
    }
    dfs(root);
    return output;
};