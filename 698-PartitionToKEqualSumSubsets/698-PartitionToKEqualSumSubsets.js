// Last updated: 4/29/2026, 10:28:33 AM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    const n = nums.length;
    let sum = 0;
    for(const num of nums) {
        sum += num;
    }
    if(sum % k !== 0) {
        return false;
    }
    const sorted = [...nums];
    sorted.sort((a, b) => b - a);
    // console.log(`sorted: ${sorted}`)
    
    const eachSum = sum / k;
    // console.log(`sum: ${sum}, k=${k}, eachSum=${eachSum}`)
    
    const visited = new Array(n).fill(false);
    
    const backtrack = (idx, count, currSum) => {
        // console.log(`idx: ${idx}, count: ${count}, currSum: ${currSum}`)
        // console.log(`visited: ${visited}`)
        if(count === k - 1) {
            return true;
        }
        if(currSum > eachSum) {
            return false;
        }
        if(currSum === eachSum) {
            return backtrack(0, count+1, 0);
        }
        for(let i = idx; i < n; i++) {
            if(!visited[i]) {
                visited[i] = true;
                if(backtrack(i+1, count, currSum + sorted[i])) {
                    return true;
                }
                visited[i] = false;
            }
        }
        return false;
    }
    
    return backtrack(0, 0, 0);
};