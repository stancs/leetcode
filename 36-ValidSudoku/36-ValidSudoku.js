// Last updated: 4/29/2026, 10:36:10 AM
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const buf = new Array(10);
    for(let i = 0; i < 9; i++) {
        buf.fill(false);
        for(let j = 0; j < 9; j++) {
            if(board[i][j] === '.') {
                continue;
            } else {
                const val = parseInt(board[i][j]);
                if(val < 1 || val > 9) {
                    return false;
                } else {
                    if(buf[val]) {
                        return false;
                    } else {
                        buf[val] = true;
                    }
                }
            }
        }
    }
    for(let j = 0; j < 9; j++) {
        buf.fill(false);
        for(let i = 0; i < 9; i++) {
            if(board[i][j] === '.') {
                continue;
            } else {
                const val = parseInt(board[i][j]);
                if(val < 1 || val > 9) {
                    return false;
                } else {
                    if(buf[val]) {
                        return false;
                    } else {
                        buf[val] = true;
                    }
                }
            }
        }
    }
    for(let p = 0; p < 3; p++) {
        for(let q = 0; q < 3; q++) {
            buf.fill(false);
            const startP = 3 * p;
            const startQ = 3 * q;
            for(let i = startP; i < startP + 3; i++) {
                for(let j = startQ; j < startQ + 3; j++) {
                    if(board[i][j] === '.') {
                        continue;
                    } else {
                        const val = parseInt(board[i][j]);
                        if(val < 1 || val > 9) {
                            return false;
                        } else {
                            if(buf[val]) {
                                return false;
                            } else {
                                buf[val] = true;
                            }
                        }
                    }
                }
            }
        }
    }
    return true;
};