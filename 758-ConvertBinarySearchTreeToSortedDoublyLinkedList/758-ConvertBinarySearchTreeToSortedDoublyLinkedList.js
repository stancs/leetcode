// Last updated: 4/29/2026, 10:28:06 AM
/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// 32:31s
// O(n) time | O(n) space
var treeToDoublyList = function(root) {
    if(!root) {
        return null;
    }
    const arr = [];
    inorder(root, arr);
    // console.log(arr);
    for(let i = 0; i < arr.length - 1; i++) {
        const curr = arr[i];
        const next = arr[i+1];
        curr.right = next;
        next.left = curr;
    }
    const head = arr[0];
    const tail = arr[arr.length - 1];
    head.left = tail;
    tail.right = head;
    return head;
};

function inorder(node, arr) {
    if(!node.left && !node.right) {
        // arr.push(node.val);
        arr.push(node);
        return;
    }
    if(node.left) {
        inorder(node.left, arr);
    }
    // arr.push(node.val);
    arr.push(node);
    if(node.right) {
        inorder(node.right, arr);
    }
}