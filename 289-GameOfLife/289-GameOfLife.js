// Last updated: 4/29/2026, 10:31:37 AM
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const m = board.length;
    const n = board[0].length;
    const copy = new Array(m).fill(null).map(() => new Array(n));
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            copy[i][j] = board[i][j];
        }
    }
    console.log(copy);
    const neighbors = (x, y) => {
        return [[x-1, y-1], [x-1, y], [x-1, y+1], [x, y-1], [x, y+1], [x+1, y-1], [x+1, y], [x+1, y+1]];
    }
    const valid = (x, y) => {
        return x >= 0 && x < m && y >= 0 && y < n;
    }
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            const validXYs = neighbors(i, j).filter(([p, q]) => valid(p, q));
            let countOnes = 0;
            for(const [x, y] of validXYs) {
                if(copy[x][y] === 1) {
                    countOnes++;
                }
            }
            if(copy[i][j] === 1) {
                if(countOnes < 2 || countOnes > 3) {
                    board[i][j] = 0;
                }
            } else {
                if(countOnes === 3) {
                    board[i][j] = 1;
                }
            }
        }
    }
};