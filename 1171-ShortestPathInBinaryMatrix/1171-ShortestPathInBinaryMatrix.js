// Last updated: 4/29/2026, 10:25:37 AM
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const n = grid.length;
    if(grid[0][0] === 1 || grid[n-1][n-1] === 1) {
        return -1
    }
    if(n === 1 && grid[0][0] === 0) {
        return 1;
    }
    const visited = new Array(n).fill(null).map(() => new Array(n).fill(false));
    const valid = (x, y) => {
        return x >= 0 && x < n && y >= 0 && y < n && grid[x][y] === 0;
    }
    const neighbors = (x, y) => {
        return [[x+1, y+1], [x-1, y-1], [x+1, y-1], [x-1, y+1], [x+1, y], [x-1, y], [x, y+1], [x, y-1]];
    }
    const bfs = start => {
        let queue = [ start ];
        while(queue.length !== 0) {
            const nextQueue = [];
            for(const [i, j, len] of queue) {
                for(const [x, y] of neighbors(i, j)) {
                    if(valid(x, y) && !visited[x][y]) {
                        console.log(`[${x}, ${y}, len + 1: ${len + 1}]`);
                        if(x === n - 1 && y === n - 1) {
                            return len + 1;
                        }
                        visited[x][y] = true;
                        nextQueue.push([x, y, len+1]);
                    }
                } 
            }
            queue = nextQueue;
        }
        return -1;    
    }
    visited[0][0] = true;
    return bfs([0, 0, 1]);
};