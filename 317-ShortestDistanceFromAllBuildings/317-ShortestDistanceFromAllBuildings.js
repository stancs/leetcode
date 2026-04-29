// Last updated: 4/29/2026, 10:31:20 AM
/**
 * @param {number[][]} grid
 * @return {number}
 */
// 2022-11-05
// 120:00s
// O(m^2*n^2)
// O(m*n)
var shortestDistance = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let minDist = Number.MAX_VALUE;
    let countBuilding = 0;
    
    const valid = (x, y) => {
        return x >= 0 && x < m && y >= 0 && y < n && grid[x][y] === 0;
    }
    
    const distMat = new Array(m).fill(null).map(() => new Array(n).fill(null).map(() => new Array(2).fill(0)));
    
    const bfs = (i, j) => {
        let queue = [[i, j]];
        
        const visited = new Array(m).fill(null).map(() => new Array(n).fill(false));
        visited[i][j] = true;
        
        let steps = 0;
        
        while(queue.length !== 0) {
            const nextQueue = [];
            for(const [x, y] of queue) {
                if(grid[x][y] === 0) {
                    distMat[x][y][0] += steps;
                    distMat[x][y][1]++;
                }
                for(const [x2, y2] of [[x-1, y], [x+1, y], [x, y-1], [x, y+1]]) {
                    if(valid(x2, y2)) {
                        if(!visited[x2][y2] && grid[x2][y2] === 0) {
                            visited[x2][y2] = true;
                            nextQueue.push([x2, y2]);
                        }
                    }   
                }     
            }
            queue = nextQueue;
            steps++;
        }
    }
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 1) {
                countBuilding++;
                bfs(i, j);
            }
        }
    }
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(distMat[i][j][1] === countBuilding) {
                minDist = Math.min(minDist, distMat[i][j][0]);
            }
        }
    }
    
    if(minDist === Number.MAX_VALUE) {
        return -1;
    }
    return minDist;
}