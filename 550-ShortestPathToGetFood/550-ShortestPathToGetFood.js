// Last updated: 4/29/2026, 10:29:28 AM
/**
 * @param {character[][]} grid
 * @return {number}
 */
// 2022-11-10
// 19:28s
// O(m*n)
// O(m*n)
var getFood = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    const valid = (i, j) => {
        return i >= 0 && i < m && j >= 0 && j < n && ['*', 'O', '#'].includes(grid[i][j]);
    }
    
    let startX, startY;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === '*') {
                startX = i;
                startY = j;
            }
        }
    }
    console.log(`start: (${startX}, ${startY})`);
    
    let queue = [[startX, startY, 0]];
    const seen = new Array(m).fill(null).map(() => new Array(n).fill(false));
    seen[startX][startY] = true;
    while(queue.length !== 0) {
        const nextQueue = [];
        for(const [x, y, dist] of queue) {
            if(grid[x][y] === '#') {
                return dist;
            }
            for(const [i, j] of [[x+1, y], [x-1, y], [x, y+1], [x, y-1]]) {
                if(valid(i, j) && !seen[i][j]) {
                    seen[i][j] = true;
                    nextQueue.push([i, j, dist + 1]);
                }
            }
        }
        console.log(nextQueue);
        queue = nextQueue;
    }
    return -1;
};