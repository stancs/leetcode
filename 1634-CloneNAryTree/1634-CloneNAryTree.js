// Last updated: 4/29/2026, 10:23:23 AM
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node|null} node
 * @return {Node|null}
 */
var cloneTree = function(root) {
    if(!root) {
        return root;
    }
    
    const visited = {};
    
    const cloneHelper = node => {
        if(visited[node.val]) {
            return visited[node.val];
        }
        
        const cloneNode = new Node(node.val, []);
        visited[node.val] = cloneNode;
        
        if(node.children) {
            cloneNode.children = node.children.map(n => cloneHelper(n));
        }
        return cloneNode;
    }
    
    return cloneHelper(root);
};

var cloneTree = function(root) {
    if(!root) {
        return root;
    }
    
    const visited = {};
    
    const queue = [ root ];
    visited[root.val] = new Node(root.val, []);
    
    while(queue.length !== 0) {
        const n = queue.shift();
        for(const child of n.children) {
            if(visited[child.val] === undefined) {
                visited[child.val] = new Node(child.val, []);
                queue.push(child);
            }
            visited[n.val].children.push(visited[child.val]);
        }
    }
    
    return visited[root.val];
}

var cloneTree = function(root) {
    if(!root) {
        return root;
    }
    
    const cloneHelper = node => {
        const cloneNode = new Node(node.val, []);
        
        if(node.children) {
            cloneNode.children = node.children.map(n => cloneHelper(n));
        }
        return cloneNode;
    }
    
    return cloneHelper(root);
};

var cloneTree = function(root) {
    if(!root) {
        return root;
    }
    
    const queue = [ root ];
    const cloneRoot = new Node(root.val, []);
    const cloneQueue = [ cloneRoot ];
    
    while(queue.length !== 0) {
        const n = queue.shift();
        const cloneN = cloneQueue.shift();
        console.log(`n: ${n.val}, children #: ${n.children.length}`)
        for(const child of n.children) {
            cloneChild = new Node(child.val, []);
            cloneN.children.push(cloneChild);
            queue.push(child);
            cloneQueue.push(cloneChild);
        }
    }
    
    return cloneRoot;
}