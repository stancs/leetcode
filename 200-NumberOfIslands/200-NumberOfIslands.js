// Last updated: 4/29/2026, 10:33:09 AM
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const visited = new Array(m).fill().map(() => new Array(n).fill(false));

    const valid = (i, j) => {
        return i >= 0 && i < m && j >= 0 && j < n;
    }
    const next = (i, j) => {
        return [[i+1, j], [i-1, j], [i, j+1], [i, j-1]];
    }
    function dfs(i, j, visited) {
        visited[i][j] = true;
        for(const [x, y] of next(i, j)) {
            if(valid(x, y) && !visited[x][y] && grid[x][y] === '1') {
                dfs(x, y, visited);
            }
        }
    }

    let count = 0;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(visited[i][j] === false && grid[i][j] === '1') {
                count++;
                dfs(i, j, visited);
            }
        }
    }
    return count;
};