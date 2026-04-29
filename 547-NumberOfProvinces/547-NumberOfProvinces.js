// Last updated: 4/29/2026, 10:29:30 AM
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 /*
 1 0 0 1
 0 1 1 0
 0 1 1 1
 1 0 1 1
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    const visited = new Array(n).fill(false);
    const dfs = i => {
        for(let j = 0; j < n; j++) {
            if(isConnected[i][j] === 1 && !visited[j]) {
                visited[j] = true;
                dfs(j);
            }
        }
    }
    let count = 0;
    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            visited[i] = true;
            count++;
            dfs(i);
        }
    }
    return count;
};