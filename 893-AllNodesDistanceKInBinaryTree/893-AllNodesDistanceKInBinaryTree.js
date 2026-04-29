// Last updated: 4/29/2026, 10:27:11 AM
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
// 2022-12-17
// 26:51s
// O(n)
// O(n)
var distanceK = function(root, target, k) {
    const adj = {};
    const addAdj = (start, end) => {
        if(adj[start] === undefined) {
            adj[start] = new Set();
        }
        adj[start].add(end);
        if(adj[end] === undefined) {
            adj[end] = new Set();
        }
        adj[end].add(start);
        
    }
    let queue = [ root ];
    while(queue.length !== 0) {
        const node = queue.shift();
        if(node.left) {
            addAdj(node.val, node.left.val);
            queue.push(node.left);
        }
        if(node.right) {
            addAdj(node.val, node.right.val);
            queue.push(node.right);
        }
    }
    console.log(adj);
    const ans = [];
    const visited = {};
    visited[target.val] = true;
    queue = [ target.val ];
    for(let i = 0; i < k; i++) {
        const nextQueue = [];
        for(const node of queue) {
            const neighbors = adj[node];
            
            if(neighbors) {
                console.log(`node: ${node}, neighbors: ${[...neighbors]}`);
                for(const nextNode of neighbors) {
                    if(!visited[nextNode]) {
                        visited[nextNode] = true;
                        nextQueue.push(nextNode);
                    }
                }
            }
        }
        console.log(`nextQueue: ${nextQueue}`)
        queue = nextQueue;
    }
    return queue;
};