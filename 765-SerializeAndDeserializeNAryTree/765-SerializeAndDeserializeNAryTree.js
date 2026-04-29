// Last updated: 4/29/2026, 10:28:01 AM
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Codec {
  	constructor() {
        
    }
    
    /** 
     * @param {Node} root
     * @return {string}
     */
    // Encodes a tree to a single string.
    serialize = function(root) {
        if(!root) {
            return '';
        }
        const queue = [ root ];
        const arr = [];
        while(queue.length !== 0) {
            const node = queue.shift();
            arr.push(node.val);
            
            if(node.children && node.children.length !== 0) {
                arr.push(node.children.length);
                queue.unshift(...node.children);    
            } else {
                arr.push(0);
            }
            
        }
        const output = arr.join(',');
        console.log(output);
        return output;
    };
	
    /** 
     * @param {string} data 
     * @return {Node}
     */
    // Decodes your encoded data to tree.
    deserialize = function(data) {
        if(data.length === 0) {
            return null;
        }
        const arr = data.split(',');
        const root = this.deserializeHelper(arr);
        return root;
    };

    deserializeHelper = function(arr) {
        const val = arr.shift();
        const numChildren = parseInt(arr.shift());
        if(numChildren === 0) {
            return new Node(val, []);
        } else {
            const children = [];
            for(let i = 0; i < numChildren; i++) {
                children.push(this.deserializeHelper(arr));
            }
            const node = new Node(val, children);
            return node;
        }
    }
    
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));