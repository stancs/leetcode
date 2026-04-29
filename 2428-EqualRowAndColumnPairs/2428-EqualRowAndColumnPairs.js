// Last updated: 4/29/2026, 10:20:37 AM
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const rowMap = {}, colMap = {};
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    for(let i = 0; i < maxRow; i++) {
        const str = grid[i].join('#');
        if(rowMap[str] === undefined) {
            rowMap[str] = 0;
        }
        rowMap[str]++;
    }
    console.log(rowMap);
    let count = 0;
    for(let j = 0; j < maxCol; j++) {
        let arr = [];
        for(let i = 0; i < maxRow; i++) {
            arr.push(grid[i][j])
        }
        const str = arr.join('#');
        if(rowMap[str]) {
            console.log(`rowMap: ${str}`)
            count += rowMap[str];
        }
        if(colMap[str] === undefined) {
            colMap[str] = 0;
        }
        colMap[str]++;
    }
    console.log(colMap);
    
    for(let i = 0; i < maxRow; i++) {
        const str = grid[i].join('#');
        if(colMap[str]) {
            console.log(`colMap: ${str}`)
            count += colMap[str]
        }
    }
    return count / 2;
};