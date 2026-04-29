// Last updated: 4/29/2026, 10:22:40 AM
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode[]} nodes
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, nodes) {
    // console.log('nodes:');
    // console.log(nodes);
    if(nodes.length === 1) {
        return nodes[0];
    }
    const parentMap = new Map();
    function dfs(node, parent) {
        if(!parentMap.get(node)) {
            parentMap.set(node, parent);
        }
        if(node.left) {
            dfs(node.left, node);
        }
        if(node.right) {
            dfs(node.right, node);
        }
    }
    dfs(root, null);

    // console.log(parentMap)

    const n = nodes.length;
    const paths = nodes.map(node => {
        const path = [];
        let curr = node;
        while(curr) {
            // console.log(`curr:`)
            // console.log(curr)
            path.push(curr);
            const parent = parentMap.get(curr);
            curr = parent;
        }
        return path.reverse();
    });

    // console.log('paths:')
    // console.log(paths);

    if(n === 1) {
        return 
    }
    const idxList = new Array(n).fill(0);
    console.log(idxList);

    let curr = 0;
    let needToCheck = true;
    while(curr >= 0 && needToCheck) {
        // console.log(`curr=${curr}`)
        curr++;
        const node1 = paths[0][curr];
        // console.log('node1: ', node1);
        for(let i = 1; i < n; i++) {
            const node2 = paths[i][curr];
            // console.log('node2: ', node2);
            if(node1 !== node2) {
                needToCheck = false;
                break;
            }
        }
    }

    return paths[0][curr-1];
};