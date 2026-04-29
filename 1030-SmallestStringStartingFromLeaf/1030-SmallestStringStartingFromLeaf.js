// Last updated: 4/29/2026, 10:26:20 AM
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
 * @return {string}
 */
// 26:18s
var smallestFromLeaf = function(root) {
    if(!root) {
        return '';
    }
    const queue = [[root, `${convertToStr(root.val)}`]];
    let smallestStr;
    while(queue.length !== 0) {
        const [node, path] = queue.shift();
        // console.log(`node=${convertToStr(node.val)}, path=${path}`);
        // console.log(`smallestStr=${smallestStr}`);
        if(!node.left && !node.right) {
            if(!smallestStr) {
                smallestStr = path;
            } else {
                if(smallestStr > path) {
                    smallestStr = path;
                }
            }
        } else {
            const children = [];
            if(node.left) {
                children.push([node.left, `${convertToStr(node.left.val)}${path}`]);
            }
            if(node.right) {
                children.push([node.right, `${convertToStr(node.right.val)}${path}`]);
            }
            queue.unshift(...children);
        }
    }
    return smallestStr;
};

function convertToStr(num) {
    return String.fromCharCode('a'.charCodeAt() + num); 
}