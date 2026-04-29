// Last updated: 4/29/2026, 10:25:56 AM
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
 * @return {number}
 */
// 2020-11-11
// 5:15s
// O(n) time | O(n) space
var maxAncestorDiff = function(root) {
    const queue = [ {
        node: root,
        min: root.val,
        max: root.val,
    } ];
    let maxV = -Infinity;
    while(queue.length !== 0) {
        const { node, min, max } = queue.shift();
        const v = Math.max(Math.abs(node.val - min), Math.abs(node.val - max));
        if(v > maxV) {
            maxV = v;
        }
        if(node.right) {
            queue.unshift({
                node: node.right,
                min: Math.min(min, node.val),
                max: Math.max(max, node.val),
            });
        }
        if(node.left) {
            queue.unshift({
                node: node.left,
                min: Math.min(min, node.val),
                max: Math.max(max, node.val),
            })
        }
    }
    return maxV;
}

// 2022-10-31
// 30:00s
// O(n)
// O(n)
var maxAncestorDiff = function(root) {
    const queue = [{
        node: root,
        min: root.val,
        max: root.val,
    }];
    let maxDiff = 0;
    while(queue.length !== 0) {
        const extendedNode = queue.shift();
        const { node, min, max } = extendedNode;
        if(node !== root) {
            const diff = Math.max(Math.abs(node.val - min), Math.abs(node.val - max));
            if(diff > maxDiff) {
                maxDiff = diff;
            }
        }
        if(node.left) {
            queue.unshift({
                node: node.left,
                min: Math.min(min, node.val),
                max: Math.max(max, node.val),
            });
        }
        if(node.right) {
            queue.unshift({
                node: node.right,
                min: Math.min(min, node.val),
                max: Math.max(max, node.val),
            });
        }
    }
    return maxDiff;
};

