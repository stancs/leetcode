// Last updated: 4/29/2026, 10:30:07 AM
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

var serialize = function(root) {
    if(!root) {
        console.log('serialize: no data');
        return '';
    }
    let arr = [];
    let queue = [ root ];
    while(queue.length !== 0) {
        const node = queue.shift();
        if(node === null) {
            arr.push('null');
            continue;
        } else {
            arr.push(node.val);    
        }
        if(node.right) {
            queue.unshift(node.right);
        } else {
            queue.unshift(null);
        }
        if(node.left) {
            queue.unshift(node.left);    
        } else {
            queue.unshift(null);
        }
    }
    const str = arr.join(',');
    console.log(str);
    return str;
}
/*
var serialize = function(root) {
    if(!root) {
        console.log('serialize: no data');
        return '';
    }
    let queue = [ root ];
    let height = 0;
    while(queue.length !== 0) {
        const newQueue = [];
        for(const node of queue) {
            if(node.left) {
                newQueue.push(node.left);
            }
            if(node.right) {
                newQueue.push(node.right);
            }
        }
        queue = newQueue;
        height++;
    }
    console.log(`height: ${height}`);
    const len = Math.pow(2, height);
    const arr = new Array(len).fill(null);
    // console.log(arr);
    arr[0] = height;
    fillArray(root, arr, 1);
    // console.log(arr);
    const outputStr = arr.join(' ');
    console.log(outputStr);
    return outputStr;
}

function fillArray(node, arr, idx) {
    if(node) {
        arr[idx] = node.val;
        if(node.left) {
            fillArray(node.left, arr, idx * 2);
        }
        if(node.right) {
            fillArray(node.right, arr, idx * 2 + 1);
        }
    }
}
*/

/*
var serialize = function(root) {
    // Get height
    // Create a matrix based on height (row: h, col: 2^h - 1)
    // Assign the value
    // Archive and serialize
    if(!root) {
        console.log('serialize: no data');
        return '';
    }
    let queue = [ root ];
    let height = 0;
    while(queue.length !== 0) {
        const newQueue = [];
        for(const node of queue) {
            if(node.left) {
                newQueue.push(node.left);
            }
            if(node.right) {
                newQueue.push(node.right);
            }
        }
        queue = newQueue;
        height++;
    }
    console.log(`height: ${height}`);
    const matrix = [];
    const maxRow = height;
    const maxCol = Math.pow(2, height) - 1;
    for(let i = 0; i < maxRow; i++) {
        const row = [];
        for(let j = 0; j < maxCol; j++) {
            row.push('');
        }
        matrix.push(row);
    }
    fillMatrix(root, matrix, 1, height, 0, matrix[0].length - 1);
    console.log(matrix);
    
    let str = archiveMatrix(matrix);
    str = `${maxRow} ${maxCol} ${str}`;
    console.log(str);
    
    return str;
};

function fillMatrix(node, matrix, currHeight, maxHeight, left, right) {
    const middle = (left + right) / 2;
    matrix[currHeight - 1][middle] = node.val;
    if(node.left) {
        fillMatrix(node.left, matrix, currHeight + 1, maxHeight, left, middle - 1);    
    }
    if(node.right) {
        fillMatrix(node.right, matrix, currHeight + 1, maxHeight, middle + 1, right);
    }
}

function archiveMatrix(matrix) {
    const arr = [];
    const maxRow = matrix.length;
    const maxCol = matrix[0].length;
    for(let i = 0; i < maxRow; i++) {
        let freq = 0;
        for(let j = 0; j < maxCol; j++) {
            const curr = matrix[i][j];
            const next = matrix[i][j+1];
            if(curr.length === 0) {
                freq++;
                
                if(!next || next.length !== 0) {
                    arr.push(`${freq}N`);       
                    freq = 0;
                }
            } else {
                arr.push(curr);
            }
        }
    }
    return arr.join(' ');
}
*/
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

var deserialize = function(data) {
    if(data.length === 0) {
        console.log('deserialize: data length is 0');
        return null;
    }
    const arr = data.split(',');
    console.log(arr);
    const root = deserializeHelper(arr);
    return root;
}

function deserializeHelper(arr) {
    if(arr.length === 0) {
        return null;
    }
    const val = arr.shift();
    let node = null;
    if(val === 'null') {
        return null;
    }
    node = new TreeNode(val);
    const left = deserializeHelper(arr);
    const right = deserializeHelper(arr);
    node.left = left;
    node.right = right;
    
    return node;
}
/*
var deserialize = function(data) {
    console.log('data');
    console.log(data);
    if(data.length === 0) {
        console.log('deserialize: data length is 0');
        return null;
    }
    const arr = data.split(' ');
    const height = arr[0];
    const root = constructBST(arr, 1, 1, height);
    return root;
}

function constructBST(arr, idx, height, maxHeight) {
    if(height > maxHeight) {
        return;
    }
    let node = null;
    const val = arr[idx];
    if(val) {
        node = new TreeNode(val);
        const leftIdx = idx * 2;
        const rightIdx = idx * 2 + 1;
        if(arr[leftIdx]) {
            node.left = constructBST(arr, leftIdx, height + 1, maxHeight);
        }
        if(arr[rightIdx]) {
            node.right = constructBST(arr, rightIdx, height + 1, maxHeight);
        }
    }
    return node;
}
*/
/*
var deserialize = function(data) {
    console.log('data');
    console.log(data);
    if(data.length === 0) {
        console.log('deserialize: data length is 0');
        return null;
    }
    const arr = data.split(' ');
    const maxRow = arr.shift();
    const maxCol = arr.shift();
    
    const matrix = [];
    for(let i = 0; i < maxRow; i++) {
        const row = [];
        while(row.length < maxCol) {
            const val = arr.shift();
            if(val.endsWith('N')) {
                const freqStr = val.substring(0, val.length - 1);
                const freq = parseInt(freqStr);
                for(let i = 0; i < freq; i++) {
                    row.push('');
                }
            } else {
                row.push(val);
            }    
        }
        matrix.push(row);
    }
    console.log(matrix);
    const root = constructBST(matrix, 0, 0, maxCol - 1);
    return root;
};

function constructBST(matrix, row, left, right) {
    if(left > right) {
        return null;
    }
    const middle = (left + right) / 2;
    let node = null;
    const val = matrix[row][middle];
    if(val.length !== 0) {
        if(val) {
            node = new TreeNode(val);
            node.left = constructBST(matrix, row + 1, left, middle - 1);
            node.right = constructBST(matrix, row + 1, middle + 1, right);
            return node;    
        } else {
            return null;   
        }
    } else {
        return null;
    }
}
*/

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */