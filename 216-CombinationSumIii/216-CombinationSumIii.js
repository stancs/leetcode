// Last updated: 4/29/2026, 10:32:47 AM
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    
    const output = [];
    const backtrack = (idx, path) => {
        if(path.length === k) {
            const sum = path.reduce((acc, num) => {
                return acc + num;
            }, 0);
            if(sum === n) {
                output.push([...path]);
            }
            return;
        }
        const start = path.length === 0? 1 : path[path.length - 1] + 1;
        for(let i = start; i <= 9; i++) {
            if(!path.includes(i)) {
                path.push(i);
                backtrack(idx + 1, path);
                path.pop();
            }
        }
    }
    backtrack(0, []);
    return output;
};