// Last updated: 4/29/2026, 10:35:44 AM
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const valid = (x, y) => {
        return x >= 0 && x < m && y >= 0 && y < n;
    }
    const nextXY = (x, y) => {
        return [[x, y+1], [x+1, y], [x, y-1], [x-1, y]];
    }
    let direction = 0;
    const visited = new Array(m).fill(null).map(() => new Array(n).fill(false));
    const output = [];
    let count = 1;
    const max = m * n;
    let i = 0, j = 0;
    visited[i][j] = true;
    output.push(matrix[i][j]);
    while(count < max) {
        const [p, q] = nextXY(i, j)[direction];
        if(valid(p, q) && !visited[p][q]) {
            output.push(matrix[p][q]);
            visited[p][q] = true;
            i = p;
            j = q;
            count++;
        } else {
            direction = (direction + 1) % 4;
        }
    }
    return output;
};