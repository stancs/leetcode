// Last updated: 4/29/2026, 10:36:07 AM
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    const hash = {};
    const output = [];
    combinationHelper([], candidates, 0, target, output, hash);
    return output;
};

function combinationHelper(arr, remains, sum, target, output, hash) {
    if(sum === target) {
        if(!hash[arr.toString()]) {
            output.push(arr);
            hash[arr.toString()] = true;
        }
    } else if(sum > target) {
        return;
    } else {
        for(let i = 0; i < remains.length; i++) {
            const newNum = remains[i];
            const newArr = arr.concat(newNum);
            const newRemains = remains.slice(i+1);
            const newSum = sum + newNum;
            combinationHelper(newArr, newRemains, newSum, target, output, hash);
        }   
    }
}