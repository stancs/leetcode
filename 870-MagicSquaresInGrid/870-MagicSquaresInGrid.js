// Last updated: 4/29/2026, 10:27:18 AM
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    const nRow = grid.length;
    const nCol = grid[0].length;
    console.log(`${nRow}x${nCol}`);
    if(nRow < 3 || nCol < 3) {
        return 0;
    }
    const checkDistinctNumbers = (p, q) => {
        const map = {};
        for(let i = p - 2; i <= p; i++) {
            for(let j = q - 2; j <= q; j++) {
                const num = grid[i][j];
                if(num < 1 || num > 9) {
                    return false;
                }
                if(map[num] === undefined) {
                    map[num] = true;
                } else {
                    console.log(`distinct number false at (${i}, ${j})`)
                    return false;
                }
            }
        }
        return true;
    }

    const checkAllRows = (p, q) => {
        for(let j = q - 2; j <= q; j++) {
            let sum = 0;
            for(let i = p - 2; i <= p; i++) {
                const num = grid[i][j];
                sum += num;
            }
            if(sum !== 15) {
                return false;
            }
        }
        return true;
    }

    const checkDiagonals = (p, q) => {
        const sum1 = grid[p-2][q-2] + grid[p-1][q-1] + grid[p][q];
        if(sum1 !== 15) {
            return false;
        }
        const sum2 = grid[p-2][q] + grid[p-1][q-1] + grid[p][q-2];
        if(sum2 !== 15) {
            return false;
        }
        return true;
    }

    const checkAllCols = (p, q) => {
        for(let i = p - 2; i <= p; i++) {
            let sum = 0;
            for(let j = q - 2; j <= q; j++) {
                const num = grid[i][j];
                sum += num;
            }
            if(sum !== 15) {
                return false;
            }
        }
        return true;
    }

    let count = 0;
    const checkMagicSquare = (i, j) => {
        if(!checkDistinctNumbers(i, j)) {
            console.log(`Return false in distinct number`)
            return false;
        }
        if(!checkAllRows(i, j)) {
            console.log(`false in row check`)
            return false;
        }
        if(!checkAllCols(i, j)) {
            console.log(`false in col check`)
            return false;
        }
        if(!checkDiagonals(i, j)) {
            console.log(`false in dia check`)
            return false;
        }
        return true;
    }

    for(let i = 2; i < nRow; i++) {
        for(let j = 2; j < nCol; j++) {
            console.log(`Checking at (${i},${j})`)
            if(checkMagicSquare(i, j)) {
                console.log(`magic square at (${i},${j})`)
                count++;
            }
        }
    }
    return count;
};