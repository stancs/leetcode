// Last updated: 4/29/2026, 10:31:13 AM
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const nRow = matrix.length;
    const nCol = matrix[0].length;

    const valid = (x, y) => {
        return x >= 0 && x < nRow && y >= 0 && y < nCol;
    }

    const neighbors = (x, y) => {
        return [
            [x+1, y], [x-1, y], [x, y+1], [x, y-1]
        ];
    };

    const dp = Array.from({length: nRow}, () => new Array(nCol).fill(undefined));

    // const dfs = ([i, j], obj, len, visited) => {
    //     if(dp[i][j] !== undefined) {
    //         obj.len = dp[i][j] + len;
    //         return;
    //     }
    //     if(len > obj.len) {
    //         obj.len = len;
    //     }
    //     const v1 = matrix[i][j];
    //     for(const [x, y] of neighbors(i, j)) {
    //         if(valid(x, y) && !visited[x][y]) {
    //             const v2 = matrix[x][y];
    //             if(v2 > v1) {
    //                 visited[x][y] = true;
    //                 dfs([x, y], obj, len + 1, visited);
    //                 visited[x][y] = false;
    //             }
    //         }
    //     }
    // }
    const dfs = (i, j, visited) => {
        if(dp[i][j] !== undefined) {
            return dp[i][j];
        }

        const v1 = matrix[i][j];
        let maxLen = 1;
        for(const [x, y] of neighbors(i, j)) {
            if(valid(x, y) && !visited[x][y]) {
                const v2 = matrix[x][y];
                if(v2 > v1) {
                    visited[x][y] = true;
                    maxLen = Math.max(maxLen, 1 + dfs(x, y, visited));
                    visited[x][y] = false;
                }
            }
        }
        dp[i][j] = maxLen;
        return maxLen;
    }

    let longestPathLen = 0;
    for(let i = 0; i < nRow; i++) {
        for(let j = 0; j < nCol; j++) {
            // const lenObj = {
            //     len: 1,
            // };
            // const visited = Array.from({ length: nRow }, () => new Array(nCol).fill(false));
            // dfs([i, j], lenObj, 1, visited);
            // if(lenObj.len > maxLen) {
            //     maxLen = lenObj.len;
            // }
            // dp[i][j] = lenObj.len;
            const visited = Array.from({ length: nRow }, () => new Array(nCol).fill(false));
            longestPathLen = Math.max(longestPathLen, dfs(i, j, visited)); 
        }
    }
    return longestPathLen;
};