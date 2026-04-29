// Last updated: 4/29/2026, 10:26:35 AM
/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
    const n = grid.length;
    const size = n * 3;
    const mat = Array.from({ length: size }, () => Array(size).fill(0));

    console.log(`n: ${n}`);
    console.log(mat);

    const fillPattern1 = (p, q) => {
        const startP = p * 3;
        const startQ = q * 3;
        mat[startP][startQ + 2] = 1;
        mat[startP + 1][startQ + 1] = 1;
        mat[startP + 2][startQ] = 1;
    }

    const fillPattern2 = (p, q) => {
        const startP = p * 3;
        const startQ = q * 3;
        mat[startP][startQ] = 1;
        mat[startP + 1][startQ + 1] = 1;
        mat[startP + 2][startQ + 2] = 1;
    }
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            const ch = grid[i][j];
            console.log(`ch: ${ch}`);
            if(ch === '/') {
                fillPattern1(i, j);
                // console.log(mat);
            } else if(ch === '\\') {
                fillPattern2(i, j);
                // console.log(mat);
            }
        }
    }
    console.log(mat);

    const valid = (x, y) => {
        return x >= 0 && x < size && y >= 0 && y < size;
    }
    const neighbors = (x, y) => {
        return [[x-1, y], [x, y-1], [x+1, y], [x, y+1]];
    }

    const dfs = (x, y) => {
        mat[x][y] = 1;
        for(const [p, q] of neighbors(x, y)) {
            if(valid(p, q) && mat[p][q] === 0) {
                dfs(p, q);
            }
        }
    }
    let count = 0;
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            if(mat[i][j] === 0) {
                count++;
                dfs(i, j);
            }
        }
    }
    return count;
};