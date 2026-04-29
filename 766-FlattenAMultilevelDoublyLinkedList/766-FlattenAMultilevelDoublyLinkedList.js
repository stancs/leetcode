// Last updated: 4/29/2026, 10:28:00 AM
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if(!head) {
        return null;
    }
    const stack = [];
    const output = [];
    let node = head;
    while(node.next || node.child || stack.length !== 0) {
        if(node.child) {
            if(node.next) {
                stack.push(node.next);
            }
            node.next = node.child;
            node.child.prev = node;
            node.child = null;
            node = node.next;
        } else {
            if(node.next) {
                node = node.next;
            } else {
                if(stack.length !== 0) {
                    const nextNode = stack.pop();
                    node.next = nextNode;
                    nextNode.prev = node;
                    node = node.next;
                }
            }
        }
    }
    return head;
};