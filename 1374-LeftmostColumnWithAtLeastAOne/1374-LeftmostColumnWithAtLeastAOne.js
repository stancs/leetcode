// Last updated: 4/29/2026, 10:24:46 AM
/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
// 30:00s
// O(r * log(c)) time | O(1) space
var leftMostColumnWithOne = function(binaryMatrix) {
    const [nRow, nCol] = binaryMatrix.dimensions();
    console.log(`nRow=${nRow}, nCol=${nCol}`);
    
    function binarySearch(row, left, right, lastCol) {
        console.log(`row=${row}, left=${left}, right=${right}, lastCol=${lastCol}`);
        if(left >= right) {
            if(binaryMatrix.get(row, left) === 0) {
                return lastCol;
            } else {
                return left;
            }
        }
        const middle = Math.floor((left + right) / 2);
        if(binaryMatrix.get(row, middle) === 0) {
            return binarySearch(row, middle + 1, right, lastCol);
        } else {
            return binarySearch(row, left, middle - 1, middle);
        }
    }

    let minCol = Infinity;
    let right = nCol;
    for(let i = 0; i < nRow; i++) {
        const col = binarySearch(i, 0, right - 1, -1);
        if(col !== -1 && col < minCol) {
            minCol = col;
            right = minCol;
        }
    }
    return minCol === Infinity? -1: minCol;
};


/*
var leftMostColumnWithOne = function(binaryMatrix) {
    const [nRow, nCol] = binaryMatrix.dimensions();
    console.log(`nRow=${nRow}, nCol=${nCol}`);
    
    function binarySearch(row, left, right, lastCol) {
        console.log(`row=${row}, left=${left}, right=${right}, lastCol=${lastCol}`);
        if(left >= right) {
            if(binaryMatrix.get(row, left) === 0) {
                return lastCol;
            } else {
                return left;
            }
        }
        const middle = Math.floor((left + right) / 2);
        if(binaryMatrix.get(row, middle) === 0) {
            return binarySearch(row, middle + 1, right, lastCol);
        } else {
            return binarySearch(row, left, middle - 1, middle);
        }
    }

    let minCol = Infinity;
    for(let i = 0; i < nRow; i++) {
        const col = binarySearch(i, 0, nCol-1, -1);
        if(col !== -1 && col < minCol) {
            minCol = col;
        }
    }
    return minCol === Infinity? -1: minCol;
};
*/

/*
var leftMostColumnWithOne = function(binaryMatrix) {
    const [nRow, nCol] = binaryMatrix.dimensions();
    console.log(`nRow=${nRow}, nCol=${nCol}`);
    for(let j = 0; j < nCol; j++) {
        for(let i = 0; i < nRow; i++) {
            if(binaryMatrix.get(i, j) === 1) {
                return j;
            }
        }
    }
    return -1;
};
*/