// Last updated: 4/29/2026, 10:26:49 AM
/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    const n = board.length;
    const mat = new Array(n).fill(null).map(() => new Array(n));
    let i = n - 1, j = 0;
    let inc = 1;
    let count = 1;
    const map = {};
    while(count <= n*n) {
        mat[i][j] = count;
        map[count] = [i, j]
        if(j === n-1 && inc > 0) {
            i--;
            inc = -1;
        } else if(j === 0 && inc < 0) {
            i--;
            inc = 1;
        } else {
            j = j + inc;
        }
        count++;
    }
    console.log(mat);
    console.log(map);
    let countJump = 0;
    let queue = [1];
    const max = n*n;
    let movesCount = 0;
    const visited = {};
    visited[`${n-1}#${0}`] = true;
    while(queue.length !== 0) {
        const nextQueue = [];
        for(const node of queue) {
            if(node === max) {
                return movesCount;
            }
            for(let i = node+1; i <= Math.min(max, node + 6); i++) {
                const [x, y] = map[i];
                const key = `${x}#${y}`;
                if(!visited[key]) {
                    visited[key] = true;
                    const boardVal = board[x][y];
                    if(boardVal === -1) {
                        const val = mat[x][y];
                        nextQueue.push(val);
                    } else {
                        nextQueue.push(boardVal);
                    }
                }
                
            }
        }
        queue = nextQueue;
        movesCount++;
    }
    return -1;
};