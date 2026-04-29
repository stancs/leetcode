// Last updated: 4/29/2026, 10:34:37 AM
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
// 6:50s
// O(n) time | O(1) space
var minDepth = function(root) {
    if(!root) {
        return 0;
    }
    let arr = [ root ];
    let minDepth = 1;
    while(arr.length !== 0) {
        const newArr = [];
        for(const node of arr) {
            if(!node.left && !node.right) {
                return minDepth;
            } else {
                if(node.left) {
                    newArr.push(node.left);    
                }
                if(node.right) {
                    newArr.push(node.right);
                }
            }
        }
        minDepth++;
        arr = newArr;
    }
};

// 2022-11-02
// 30:00s
// O(n)
// O(1)
var minDepth = function(root) {
    if(!root) {
        return 0;
    }
    const minObj = {
        minDepth: Number.MAX_VALUE,
    };
    dfs(root, 1, minObj);
    return minObj.minDepth;
};

function dfs(node, depth, minObj) {
    if(!node || depth > minObj.minDepth) {
        return;
    }
    if(!node.left && !node.right && depth < minObj.minDepth) {
        minObj.minDepth = depth;
    }
    if(node.left) {
        dfs(node.left, depth + 1, minObj);
    }
    if(node.right) {
        dfs(node.right, depth + 1, minObj);
    }
}