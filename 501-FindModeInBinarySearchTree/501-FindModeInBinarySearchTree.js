// Last updated: 4/29/2026, 10:29:50 AM
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
 * @return {number[]}
 */
// 2022-10-30
// 07:05s
// O(n)
// O(n)
// Recursive method
var findMode = function(root) {
    const map = {};
    dfs(root, map);
    let maxCount = 0;
    let mode = [];
    const keys = Object.keys(map).map(strKey => parseInt(strKey));
    for(const key of keys) {
        if(map[key] > maxCount) {
            mode = [ key ];
            maxCount = map[key];
        } else if(map[key] === maxCount) {
            mode.push(key);
        }
    }
    return mode;
};

function dfs(node, map) {
    if(!node) {
        return;
    }
    if(map[node.val] === undefined) {
        map[node.val] = 1;
    } else {
        map[node.val]++;
    }
    if(node.left) {
        dfs(node.left, map);
    }
    if(node.right) {
        dfs(node.right, map);
    }
}

// 2022-10-30
// 02:00s
// O(n)
// O(n)
// Iterative method
var findMode = function(root) {
    const map = {};
    let queue = [ root ];
    while(queue.length !== 0) {
        const newQueue = [];
        for(const node of queue) {
            if(map[node.val] === undefined) {
                map[node.val] = 1;
            } else {
                map[node.val]++;
            }
            if(node.left) {
                newQueue.push(node.left);
            }
            if(node.right) {
                newQueue.push(node.right);
            }       
        }
        queue = newQueue;
    }
    let maxCount = 0;
    let mode = [];
    const keys = Object.keys(map).map(strKey => parseInt(strKey));
    for(const key of keys) {
        if(map[key] > maxCount) {
            mode = [ key ];
            maxCount = map[key];
        } else if(map[key] === maxCount) {
            mode.push(key);
        }
    }
    return mode;
}