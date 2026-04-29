// Last updated: 4/29/2026, 10:21:48 AM
/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
    const sumM = rolls.reduce((acc, val) => acc + val, 0);
    const expectedSum = mean * (rolls.length + n);
    // console.log(`sumM: ${sumM}`)
    // console.log(`totalSum: ${expectedSum}`);
    const diff = expectedSum - sumM;

    let output = null;
    const recursive = (path, sum) => {
        if(output !== null) {
            return;
        }
        if(path.length === n) {
            if(sum === diff) {
                output = path;
            }
            return;
        }
        const len = path.length;
        const remainObservations = n - len;
        const avg = (diff - sum) / remainObservations;
        if(avg > 6) {
            return;
        }
        for(let i = 1; i <= 6; i++) {
            if(sum + i <= diff) {
                const newPath = path.concat(i);
                recursive(newPath, sum + i);
            }
        }
    }

    recursive([], 0);
    return output !== null? output: [];
};

var missingRolls = function(rolls, mean, n) {
    const m = rolls.length;
    
    // Total sum for all (n + m) rolls
    const totalSum = mean * (n + m);
    
    // Sum of the rolls we already know
    const currentSum = rolls.reduce((acc, curr) => acc + curr, 0);
    
    // The sum that the n missing rolls should have
    const missingSum = totalSum - currentSum;
    
    // Check if the missing sum is possible (it should be between n and 6 * n)
    if (missingSum < n || missingSum > 6 * n) {
        return [];
    }
    
    // Distribute the missing sum across the n rolls
    const result = new Array(n).fill(Math.floor(missingSum / n));
    let remainder = missingSum % n;
    
    // Distribute the remainder by adding 1 to the first 'remainder' rolls
    for (let i = 0; i < remainder; i++) {
        result[i]++;
    }
    
    return result;
}