// Last updated: 4/29/2026, 10:27:56 AM
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    const dfs = node => {
        if(!node) {
            return 0;
        }
        const list = [];
        // console.log(`node.val: ${node.val}`);
        // console.log(`node.children: ${node.children}`);
        for(const child of node.children) {
            // if(child) {
            //     console.log(`child: ${child.val}`);
            // }
            list.push(dfs(child));
        }
        // console.log(list);
        if(list.length === 0) {
            return 1;
        } else {
            return Math.max(...list) + 1;
        }
    }
    return dfs(root);
};