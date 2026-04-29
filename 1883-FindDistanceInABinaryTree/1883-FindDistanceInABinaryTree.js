// Last updated: 4/29/2026, 10:22:34 AM
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
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var findDistance = function(root, p, q) {
     let pNode, qNode;
     const parentMap = new Map();

     const dfs = (node, parent) => {
        if(parent !== null) {
            parentMap.set(node, parent);
        }
        if(node.val === p) {
            pNode = node;
        } 
        if(node.val === q) {
            qNode = node;
        }
        if(node.left) {
            dfs(node.left, node);
        }
        if(node.right) {
            dfs(node.right, node);
        }
     }
     dfs(root, null);

     console.log(pNode);
     console.log(qNode);

     let queue = [pNode];
     let count = 0;
     const visited = new Map();
     while(queue.length > 0) {
        const next = [];
        for(const node of queue) {
            if(node === qNode) {
                return count;
            }
            visited.set(node, true);
            if(node.left && !visited.get(node.left)) {
                next.push(node.left);
            }
            if(node.right && !visited.get(node.right)) {
                next.push(node.right);
            }
            const parent = parentMap.get(node);
            if(parent && !visited.get(parent)) {
                next.push(parent);
            }
        }
        queue = next;
        count++;
    }
};