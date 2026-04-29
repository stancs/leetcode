// Last updated: 4/29/2026, 10:21:28 AM
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    const n = matrix.length;
    return checkEachRow(matrix, n) && checkEachCol(matrix, n);
};

function checkEachRow(matrix, n) {
    for(let i = 0; i < n; i++) {
        const map = {};
        for(let j = 0; j < n; j++) {
            const num = matrix[i][j];
            if(num < 1 || num > n) {
                return false;
            }
            if(map[num] === undefined) {
                map[num] = true
            } else {
                return false;
            }
        }
    }
    return true;
}

function checkEachCol(matrix, n) {
    for(let j = 0; j < n; j++) {
        const map = {};
        for(let i = 0; i < n; i++) {
            const num = matrix[i][j];
            if(num < 1 || num > n) {
                return false;
            }
            if(map[num] === undefined) {
                map[num] = true
            } else {
                return false;
            }
        }
    }
    return true;
}