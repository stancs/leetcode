// Last updated: 4/29/2026, 10:36:08 AM
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const sorted = [...candidates].sort((a, b) => a - b);
    const output = [];
    const backtrack = (arr, sum) => {
        if(sum === target) {
            output.push([...arr]);
        }
        const last = arr[arr.length - 1];
        for(let i = 0; i < candidates.length; i++) {
            const num = candidates[i];
            if(num < last) {
                continue;
            }
            const newSum = sum + num;
            if(newSum <= target) {
                arr.push(num);
                backtrack(arr, newSum);
                arr.pop();
            }
        }
    }
    backtrack([], 0);
    return output;
};