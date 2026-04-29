// Last updated: 4/29/2026, 10:25:55 AM
/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    const arr = [];
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            arr.push([i, j]);
        }
    }
    arr.sort((point1,point2) => {
        const [x1, y1] = point1;
        const dist1 = Math.abs(x1 - rCenter) + Math.abs(y1 - cCenter);
        
        const [x2, y2] = point2;
        const dist2 = Math.abs(x2 - rCenter) + Math.abs(y2 - cCenter);
        return dist1 - dist2;
    })
    return arr;
};