// Last updated: 4/29/2026, 10:36:53 AM
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) {
        return s;
    }
    const len = s.length;
    const mat = new Array(numRows).fill(null).map(() => new Array(len).fill(''));
    let direction = 1;
    const travel = (x, y, direction, idx) => {
        if(idx === len) {
            return;
        }
        mat[x][y] = s[idx];
        if(x === 0 && direction === -1 ) {
            travel(x+1, y, 1, idx+1);
        } else if(x === numRows - 1 && direction === 1) {
            travel(x-1, y+1, -1, idx+1);
        } else if(direction === 1) {
            travel(x+1, y, 1, idx+1);
        } else {
            travel(x-1, y+1, -1, idx+1);
        }
    }

    travel(0, 0, 1, 0);
    // read();
    console.log(mat);

    let str = '';
    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[0].length; j++) {
            const val = mat[i][j];
            if(val !== '') {
                str += val;
            }
        }
    }
    return str;
};