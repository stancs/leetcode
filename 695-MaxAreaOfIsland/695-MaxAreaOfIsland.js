// Last updated: 4/29/2026, 10:28:36 AM
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    const valid = (i, j) => {
        return i >= 0 && i < m && j >= 0 && j < n && grid[i][j] === 1; 
    }
    
    const visited = new Array(m).fill(null).map(() => new Array(n).fill(false));
    const neighbors = (i, j) => {
        return [[i+1, j], [i-1, j], [i, j+1], [i, j-1]];
    }
    const dfs = (i, j, obj) => {
        for(const [x, y] of neighbors(i, j)) {
            if(valid(x, y) && !visited[x][y]) {
                obj.area++;
                visited[x][y] = true;
                dfs(x, y, obj);    
            }
        }
    }
    
    let max = 0;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 1 && !visited[i][j]) {
                visited[i][j] = true;
                const obj = { area: 1 };
                dfs(i, j, obj);
                if(obj.area > max) {
                    max = obj.area;
                }
            }
        }
    }
    return max;
};