// Last updated: 4/29/2026, 10:22:17 AM
/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    // start from grid2[i][j] === 1
    const m = grid1.length;
    const n = grid1[0].length;
    // console.log(`${m}x${n} matrix`)
    
    const getNeighbors = (x, y) => [[x+1, y], [x-1, y], [x, y+1], [x, y-1]];
    const isValid = (x, y) => x >= 0 && x < m && y >= 0 && y < n;
    
    const dfs = (i, j, obj) => {
        // console.log(`DFS i: ${i}, j: ${j}`)
        visited[i][j] = true;
        for(const [i2, j2] of getNeighbors(i, j)) {
            if(isValid(i2, j2) && grid2[i2][j2] === 1 && !visited[i2][j2]) {
                // console.log(`check i2: ${i2}, j2: ${j2}`)
                if(grid1[i2][j2] === 0) {
                    obj.res = false;
                } 
                dfs(i2, j2, obj);
            }
        }
    }
    
    let count = 0;
    const visited = new Array(m).fill(null).map(() => new Array(n).fill(false));
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            // console.log(`i: ${i}, j: ${j}`)
            if(!visited[i][j] && grid2[i][j] === 1 && grid1[i][j] === 1) {
                // console.log(`check dfs`)
                const obj = { res: true }
                const res = dfs(i, j, obj);
                // console.log(`res: ${obj.res}`)
                if(obj.res) {
                    count++;
                }
                // console.log(`count: ${count}`)
            }
        }
    }
    return count;
};