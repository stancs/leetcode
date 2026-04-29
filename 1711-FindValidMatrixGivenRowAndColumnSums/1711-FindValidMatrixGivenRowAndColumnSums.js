// Last updated: 4/29/2026, 10:23:07 AM
/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */ 
var restoreMatrix = function(rowSum, colSum) {
//   const mat = new Array(m);
  
//   const rowIdx = rowSum.map((val, idx) => [val, idx]);
//   const colIdx = colSum.map((val, idx) => [val, idx]);
//   console.log(rowIdx);
//   console.log(colIdx);
//   const sortedRow = rowIdx.sort((a, b) => a[0]-b[0]);
//   const sortedCol = colIdx.sort((a, b) => a[0]-b[0]);
//   console.log(sortedRow);
//   console.log(sortedCol);

//   for(let i = 0; i < m; i++) {
//     mat[i] = new Array(n).fill(null);
//   }
//   console.log(mat);
//   for(sort)
    const m = rowSum.length;
    const n = colSum.length;
    const mat = Array.from({ length: m}, () => new Array(n).fill(0));
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            const minVal = Math.min(rowSum[i], colSum[j]);
            // console.log(`(i, j) = (${i}, ${j}), minVal=${minVal}`);
            mat[i][j] = minVal;
            // console.log(mat);
            rowSum[i] -= minVal;
            colSum[j] -= minVal;
            // console.log(`rowSum: ${rowSum}`)
            // console.log(`colSum: ${colSum}`);
        }
    }
    return mat;
};