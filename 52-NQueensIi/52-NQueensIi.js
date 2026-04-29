// Last updated: 4/29/2026, 10:35:47 AM
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    const board = new Array(n).fill(null).map(() => new Array(n).fill('.'));
    const isSafe = (row, col) => {
        for(let j = 0; j < n; j++) {
            if(j !== col && board[row][j] === 'Q') {
                return false;
            }
        }
        for(let i = 0; i < n; i++) {
            if(i !== row && board[i][col] === 'Q') {
                return false;
            }
        }
        const min = Math.min(row, col);

        const len = n - 1;
        let currRow;
        let currCol;
        for(let p = -len; p <= len; p++) {
            currRow = row - p;
            currCol = col - p;
            if(currRow >= 0 && currRow < n && currCol >= 0 && currCol < n) {
                if(board[currRow][currCol] === 'Q') {
                    return false;
                }
            }
            currRow = row - p;
            currCol = col + p;
            if(currRow >= 0 && currRow < n && currCol >= 0 && currCol < n) {
                if(board[currRow][currCol] === 'Q') {
                    return false;
                }
            }
        }
        return true;
    }

    let count = 0;
    const placeQueen = row => {
        console.log(`board`, board)
        if(row === n) {
            count++;
            return;
        }
        for(let col = 0; col < n; col++) {
            console.log(`(${row}, ${col})`)
            if(isSafe(row, col)) {
                console.log('isSafe is true')
                board[row][col] = 'Q';
                placeQueen(row + 1);
                board[row][col] = '.';
            }
        }
    }
    placeQueen(0);
    return count;
};