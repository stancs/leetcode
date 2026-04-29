// Last updated: 4/29/2026, 10:22:55 AM
/**
 * @param {number[][]} heights
 * @return {number}
 */
// O(m*n)
// O(m*n)
// 1hr
var minimumEffortPath = function(heights) {
    const m = heights.length;
    const n = heights[0].length;
    
    const valid = (i, j) => {
        return i >= 0 && i < m && j >= 0 && j < n;
    }
    const neighbors = (i, j) => {
        return [[i+1, j], [i-1, j], [i, j+1], [i, j-1]];
    }
    
    const dfs = (i, j, effort, visited) => {
        if(i === m - 1 && j === n - 1) {
            return true;
        }
        for(const [x, y] of neighbors(i, j)) {
            if(valid(x, y) && !visited[x][y] && Math.abs(heights[i][j] - heights[x][y]) <= effort) {
                visited[x][y] = true;
                if(dfs(x, y, effort, visited)) {
                    return true;
                }
            }
        }
        return false;
    }
    const check = effort => {
        const visited = new Array(m).fill(null).map(() => new Array(n).fill(false));
        return dfs(0, 0, effort, visited);    
    }
    
    let left = 0;
    let min = max = heights[0][0];
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            min = Math.min(min, heights[i][j]);
            max = Math.max(max, heights[i][j]);
        }
    }
    let right = max - min;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        if(check(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
}
