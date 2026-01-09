// Last updated: 1/9/2026, 9:45:29 AM
1/**
2 * Definition for a binary tree node.
3 * function TreeNode(val, left, right) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.left = (left===undefined ? null : left)
6 *     this.right = (right===undefined ? null : right)
7 * }
8 */
9/**
10 * @param {TreeNode} root
11 * @return {TreeNode}
12 */
13var subtreeWithAllDeepest = function(root) {
14    let queue = [root];
15    const parentMap = new Map();
16    let depth = 0;
17    let prevQueue;
18    while(queue.length !== 0) {
19        prevQueue = queue;
20        newQueue = [];
21        for(const node of queue) {
22            if(node.left) {
23                parentMap.set(node.left, node);
24                newQueue.push(node.left);
25            }
26            if(node.right) {
27                parentMap.set(node.right, node);
28                newQueue.push(node.right);
29            }
30        }
31        depth++;
32        queue = newQueue;
33    }
34    console.log(parentMap);
35    console.log(prevQueue);
36
37    let queue2 = prevQueue;
38    while(queue2.length !== 1) {
39        const newSet = new Set();
40        for(const node of queue2) {
41            const parent = parentMap.get(node);
42            newSet.add(parent);
43        }
44        queue2 = [...newSet];
45    }
46    return queue2[0];
47};