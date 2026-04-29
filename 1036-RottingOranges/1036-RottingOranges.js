// Last updated: 4/29/2026, 10:26:15 AM
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let nFresh = 0;
    let nRotten = 0;
    let queue = [];
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 1) {
                nFresh++;
            } else if(grid[i][j] === 2) {
                nRotten++;
                queue.push([i, j]);
            }
        }
    }
    console.log(`fresh #: ${nFresh}`)
    console.log(`rotten #: ${nRotten}`)

    if(nFresh === 0) {
        return 0;
    }
    const neighbors = (x, y) => {
        return [[x+1, y], [x-1, y], [x, y+1], [x, y-1]];
    }
    const isValid = (x, y) => {
        return (x >= 0 && x < m && y >= 0 && y < n) && grid[x][y] === 1;
    }
    const visited = new Array(m).fill(null).map(() => new Array(n).fill(0));
    console.log(visited);
    let count = 0;
    while(queue.length !== 0) {
        const nextQueue = [];
        count++;
        for(const [x, y] of queue) {
            visited[x][y] = 1;
            for(const [p, q] of neighbors(x, y)) {
                if(isValid(p, q) && !visited[p][q]) {
                    visited[p][q] = 1;
                    nFresh--;
                    if(nFresh === 0) {
                        return count;
                    }
                    nextQueue.push([p, q]);
                }
            }
        }
        queue = nextQueue;
    }
    return -1;
};