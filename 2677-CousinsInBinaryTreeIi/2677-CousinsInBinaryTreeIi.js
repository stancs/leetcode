// Last updated: 4/29/2026, 10:19:50 AM
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
 * @return {TreeNode}
 */
var replaceValueInTree = function(root) {
    // using bfs
    // for each node, store parent, sum in the same level, sum in the same sibling
    const nodeMap = new Map();
    let queue = [[root, null]];
    while(queue.length !== 0) {
        const nextQueue = [];
        let sumInLevel = 0;
        const map = new Map();
        for(const [node, parent] of queue) {
            sumInLevel += node.val;
            if(map.get(parent) === undefined) {
                map.set(parent, node.val);
            } else {
                const newVal = node.val + map.get(parent);
                map.set(parent, newVal);
            }
            if(node.left) {
                nextQueue.push([node.left, node]);
            }
            if(node.right) {
                nextQueue.push([node.right, node]);
            }
        }
        // console.log(`sum in level: ${sumInLevel}`);
        // console.log(map);
        for(const [node, parent] of queue) {
            nodeMap.set(node, { sumInLevel, sumInSibling: map.get(parent) })
        }
        queue = nextQueue;
    }
    // console.log(nodeMap);
    
    const dfs = node => {
        const obj = nodeMap.get(node);
        const newVal = obj.sumInLevel - obj.sumInSibling;
        node.val = newVal;
        if(node.left) {
            dfs(node.left);
        }
        if(node.right) {
            dfs(node.right);
        }
    }
    
    dfs(root);
    return root;
};