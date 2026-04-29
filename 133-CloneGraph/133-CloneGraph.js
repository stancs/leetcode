// Last updated: 4/29/2026, 10:34:10 AM
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(!node) {
        return node;
    }
    
    const map = {};
    const copyNode = node => {
        if(map[node.val]) {
            return map[node.val];
        }
        let cloneNode = new Node(node.val);
        map[node.val] = cloneNode;
        
        if(node.neighbors.length !== 0) {
            cloneNode.neighbors = node.neighbors.map(n => copyNode(n));
        }
        return cloneNode;
    }
    
    return copyNode(node);
};