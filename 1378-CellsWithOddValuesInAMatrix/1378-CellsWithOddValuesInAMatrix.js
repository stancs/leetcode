// Last updated: 4/29/2026, 10:24:45 AM
/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
// 16:00s
// O(n * m * i) time | O(n*m) space
var oddCells = function(n, m, indices) {
    const matrix = [];
    for(let i = 0; i < n; i++) {
        const row = [];
        for(let j = 0; j < m; j++) {
            row.push(0);
        }
        matrix.push(row);
    }
    // console.log(matrix);
    for(const index of indices) {
        const [row, col] = index;
        // increase row
        for(let j = 0; j < m; j++) {
            matrix[row][j]++;
        }
        
        // increase col
        for(let i = 0; i < n; i++) {
            matrix[i][col]++;
        }
    }
    // console.log(matrix);
    
    let count = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(matrix[i][j] % 2 === 1) {
                count++;
            }
        }
    }
    return count;
};