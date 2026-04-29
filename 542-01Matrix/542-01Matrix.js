// Last updated: 4/29/2026, 10:29:33 AM
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
// O(m*n)
// O(m*n)
// 3 days
var updateMatrix = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    const output = new Array(m).fill(null).map(() => new Array(n).fill(0));
    console.log(output);
    const valid = (i, j) => {
        return i >= 0 && i < m && j >= 0 && j < n && mat[i][j] === 1;
    }
    const neighbors = (i, j) => {
        return [[i+1, j], [i-1, j], [i, j+1], [i, j-1]];
    }
    
    let queue = [];
    
    const visited = new Array(m).fill(null).map(() => new Array(n).fill(false));
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(mat[i][j] === 0) {
                output[i][j] = 0;
                visited[i][j] = true;
                queue.push([i, j]);
            }
        }
    }
    
    let d = 1;
    
    while(queue.length !== 0) {
        const nextQueue = [];
        for(const [i, j] of queue) {
            // console.log(`[i,j] = [${i}, ${j}]`)
            for(const [x, y] of neighbors(i, j)) {
                // console.log(`[x, y] = [${x}, ${y}]`)
                if(valid(x, y) && !visited[x][y]) {
                    visited[x][y] = true;
                    output[x][y] = d;
                    nextQueue.push([x, y]);
                }
            }
        }
        d++;
        queue = nextQueue;
    }

    return output;
};
