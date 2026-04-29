// Last updated: 4/29/2026, 10:35:06 AM
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    const len = word.length;
    const valid = (x, y) => {
        return x >= 0 && x < m && y >= 0 && y < n;
    }
    const neighbors = (x, y) => {
        return [[x+1, y], [x-1, y], [x, y+1], [x, y-1]];
    }
    const dfs = (i, j, idx, visited) => {
        if(idx === len - 1) {
            return true;
        }
        for(const [i2, j2] of neighbors(i, j)) {
            if(valid(i2, j2) && !visited[i2][j2] && board[i2][j2] === word[idx+1]) {
                visited[i2][j2] = true;
                if(dfs(i2, j2, idx+1, visited)) {
                    return true;
                }
                visited[i2][j2] = false;
            }
        }
        return false;
    }
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            const ch = board[i][j];
            if(ch === word[0]) {
                const visited = new Array(m).fill(null).map(() => new Array(n).fill(false));
                visited[i][j] = true;
                if(dfs(i, j, 0, visited)) {
                    return true;
                }
            }
        }
    }
    return false;
};