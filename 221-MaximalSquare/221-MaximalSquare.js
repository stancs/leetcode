// Last updated: 4/29/2026, 10:32:41 AM
/**
 * @param {character[][]} matrix
 * @return {number}
 */
// 35:47s
// O(n^2) time | O(n^2) space
var maximalSquare = function(matrix) {
    const nRow = matrix.length;
    const nCol = matrix[0].length;
    console.log(`nRow=${nRow}, nCol=${nCol}`);
    
    let max = 0;
    
    function checkArea(startRow, startCol) {
        let size = 1;
        while(startRow + size < nRow && startCol + size < nCol) {
            // Check col: i + size
            for(let i = startRow; i <= startRow + size; i++) {
                if(matrix[i][startCol + size] !== "1") {
                    return size * size;
                }
            }
            
            // Check row: j + size
            for(let j = startCol; j < startCol + size; j++) {
                if(matrix[startRow + size][j] !== "1") {
                    return size * size;
                }
            }
            size++;
        }
        return size * size;
    }
            
    for(let i = 0; i < nRow; i++) {
        for(let j = 0; j < nCol; j++) {
            if(matrix[i][j] === "1") {
                // console.log(`[${i},${j}] = "1"`);
                const area = checkArea(i, j);
                // console.log(`area=${area}, max=${max}`);
                if(area > max) {
                    max = area;
                }
            }
        }
    }
    return max;
};

