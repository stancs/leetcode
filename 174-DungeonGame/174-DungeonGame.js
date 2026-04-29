// Last updated: 4/29/2026, 10:33:21 AM
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
// 180:00s
// O(row * col) time | O(row * col) space
var calculateMinimumHP = function(dungeon) {
    if(dungeon.length === 0) {
        return 0;
    }
    const nRows = dungeon.length;
    const nCols = dungeon[0].length;
    
    const minHealth = dungeon.map(row => row.map(() => 0));
    
    for(let i = nRows - 1; i >= 0; i--) {
        for(let j = nCols - 1; j >= 0; j--) {
            if(i === nRows - 1 && j === nCols - 1) {
                minHealth[i][j] = Math.max(1, 1 - dungeon[i][j]);
            } else {
                minHealth[i][j] = Math.max(1, Math.min(getMinHealth(i+1, j, nRows, nCols, minHealth), getMinHealth(i, j+1, nRows, nCols, minHealth)) - dungeon[i][j]);    
            }
        }
    }
    return minHealth[0][0];
};

function getMinHealth(row, col, nRows, nCols, minHealth) {
    if(row >= nRows || col >= nCols) {
        return Infinity;
    } 
    
    return minHealth[row][col];
}