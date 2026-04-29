// Last updated: 4/29/2026, 10:20:31 AM
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
 * @param {number} start
 * @return {number}
 */
// 2022-11-10
// 39:44s
// O(n)
// O(n)
var amountOfTime = function(root, start) {
    const nodeMap = {};
    const adjMap = {};
    let queue = [ root ];
    while(queue.length !== 0) {
        const newQueue = [];
        for(const node of queue) {
            nodeMap[node.val] = node;
            if(adjMap[node.val] === undefined) {
                adjMap[node.val] = new Set();
            } 
            
            if(node.left) {
                newQueue.push(node.left);
                adjMap[node.val].add(node.left.val);
                if(adjMap[node.left.val] === undefined) {
                    adjMap[node.left.val] = new Set();
                    adjMap[node.left.val].add(node.val);
                }
            }
            if(node.right) {
                newQueue.push(node.right);
                adjMap[node.val].add(node.right.val);
                if(adjMap[node.right.val] === undefined) {
                    adjMap[node.right.val] = new Set();
                    adjMap[node.right.val].add(node.val);
                }
            }
        }
        queue = newQueue;
    }
    // console.log(nodeMap);
    // console.log(adjMap);
    
    queue = [ start ];
    const seen = new Set();
    seen.add(start);
    let min = 0;
    while(queue.length !== 0) {
        const newQueue = [];
        for(const nodeNum of queue) {
            for(const neighborNum of adjMap[nodeNum]) {
                if(!seen.has(neighborNum)) {
                    seen.add(neighborNum);
                    newQueue.push(neighborNum);
                }
            }
        }
        if(newQueue.length > 0) {
            min++;
        }
        queue = newQueue;
    }
    return min;
};