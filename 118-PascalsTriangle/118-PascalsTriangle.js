// Last updated: 4/29/2026, 10:34:32 AM
/**
 * @param {number} numRows
 * @return {number[][]}
 */
// 2022-11-09
// 10:05
// O(n^2)
// O(n^2)
var generate = function(numRows) {
    const ans = [];
    const pascal = n => {
        if(n === 1) {
            return [1];
        } else if(n === 2) {
            return [1, 1];
        }
        const prev = pascal(n - 1);
        const arr = [1];
        for(let i = 0; i < prev.length - 1; i++) {
            arr.push(prev[i] + prev[i + 1]);
        }
        arr.push(1);
        return arr;
    }
    for(let i = 1; i <= numRows; i++) {
        ans.push(pascal(i));
    }
    return ans;
};

