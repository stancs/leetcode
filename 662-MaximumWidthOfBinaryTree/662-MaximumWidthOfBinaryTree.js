// Last updated: 4/29/2026, 10:28:54 AM
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
// 38:47s
// O(2^h) time | O(2^h) space
var widthOfBinaryTree = function(root) {
    if(!root) {
        return 0;
    }
    let queue = [ root ];
    let maxWidth = 1;
    let allNull = false;
    while(!allNull) {
        allNull = true;
        let newQueue = [];
        for(const node of queue) {
            if(node === null) {
                newQueue.push(null, null);
            } else {
                newQueue.push(node.left);
                newQueue.push(node.right);
                allNull = false;    
            }
        }
        newQueue = checkWidth(newQueue);
        let width = newQueue.length;
        if(width > maxWidth) {
            maxWidth = width;
        } 
        queue = newQueue;
    }
    return maxWidth;
};

function checkWidth(array) {
    let left = 0;
    let right = array.length - 1;
    while(array[left] === null) {
        left++;
    }
    if(left === array.length) {
        return [];
    }
    
    while(array[right] === null) {
        right--;
    }
    return array.slice(left, right+1);
}