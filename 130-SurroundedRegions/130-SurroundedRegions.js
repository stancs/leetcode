// Last updated: 4/29/2026, 10:34:11 AM
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const m = board.length;
    const n = board[0].length;
    
    const visited = new Array(m).fill(null).map(() => new Array(n).fill(0));
    // console.log(visited);
    const shouldKeep = {};
    
    const getNeighbors = (x, y) => [[x+1, y], [x-1, y], [x, y+1], [x, y-1]];
    const isValid = (x, y) => x >= 0 && x < m && y >= 0 && y < n;
    const dfs = (i, j, group) => {
        visited[i][j] = group;
        for(const [i2, j2] of getNeighbors(i, j)) {
            if(isValid(i2, j2)) {
                if(board[i2][j2] === 'O' && visited[i2][j2] === 0) {
                    dfs(i2, j2, group);
                }
            } else {
                shouldKeep[group] = true;
            }
        }
    }
    
    let group = 1;
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(board[i][j] === 'O' && visited[i][j] === 0) {
                dfs(i, j, group);
                group++;
                // console.log(visited);
                // console.log(shouldKeep);
            }
        }
    }
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(board[i][j] === 'O' && !shouldKeep[visited[i][j]] ) {
                board[i][j] = 'X';
            }
        }
    }
};