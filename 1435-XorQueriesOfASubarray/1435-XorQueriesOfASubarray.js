// Last updated: 4/29/2026, 10:24:19 AM
/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    const calculateXOR = (left, right) => {
        let result = arr[left];
        for(let j = left + 1; j <= right; j++) {
            result = result ^ arr[j]; 
        }
        return result;
    }
    const output = [];
    for(const [left, right] of queries) {
        const result = calculateXOR(left, right);
        output.push(result);
    }
    return output;
};