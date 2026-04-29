// Last updated: 4/29/2026, 10:34:26 AM
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// 2022-11-24
// 05:43s
// O(n^2)
// O(n)
var getRow = function(rowIndex) {
    const pascalHelper = i => {
        if(i === 0) {
            return [1];
        } else if(i === 1) {
            return [1, 1];
        }
        const prev = pascalHelper(i - 1);
        const curr = [];
        for(let i = 0; i < prev.length - 1; i++) {
            curr.push(prev[i] + prev[i+1]);
        }
        curr.push(1);
        curr.unshift(1);
        return curr;
    }
    
    return pascalHelper(rowIndex);
};