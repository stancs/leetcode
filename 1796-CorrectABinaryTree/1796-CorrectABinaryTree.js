// Last updated: 4/29/2026, 10:22:44 AM
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
 * @param {number} from
 * @param {number} to
 * @return {TreeNode}
 */
// 23:03s
// T O(n)
// S O(n)
var correctBinaryTree = function(root) {
    // using bfs
    // set map1(parent) and map2(children)
    // using queue, perform bfs
    // check each node in the same depth 
    let map = new Map();
    let queue = [ root ];
    while(queue.length !== 0) {
        const nextQueue = [];
        for(const node of queue) {
            if(node.left) {
                map.set(node.left, node);
                nextQueue.push(node.left);
            }
            if(node.right) {
                map.set(node.right, node);
                nextQueue.push(node.right);
            }
        }
        // check
        for(const nextNode of nextQueue) {
            console.log(`[nextNode] val: ${nextNode.val}`)
            if(nextQueue.includes(nextNode.right)) {
                console.log(`nextQueue include: true`)
                const parent = map.get(nextNode);
                if(parent.left === nextNode) {
                    parent.left = null;
                } else {
                    parent.right = null;
                }
                return root;
            }
        }
        queue = nextQueue;
    }
};