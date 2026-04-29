// Last updated: 4/29/2026, 10:29:43 AM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// O(n) time | O(1) space
var checkSubarraySum = function(nums, k) {
    // To consider less than or equal to 2 items array
    const hash = { '0': -1 };
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        if(k !== 0) {
            sum = (sum + nums[i]) % k;    
        } else {
            sum += nums[i];
        }
        console.log(`sum = ${sum}`);
        if(hash[sum] !== undefined) {
            // If the index difference is more than or equal to 2
            if(i - hash[sum] >= 2) {
                return true;
            }
        } else {
            hash[sum] = i;
        }
    }
    return false;
}

/*
// O(n^2) time | O(n^2) space
var checkSubarraySum = function(nums, k) {
    const dp = [];
    for(let i = 0; i < nums.length; i++) {
        const row = [];
        for(let j = 0; j < nums.length; j++) {
            if(i === j) {
                row.push(nums[i]);
            } else {
                row.push(0);    
            }
        }
        dp.push(row);
    }
    // console.log(dp);
    
    for(let i = nums.length - 2; i >= 0; i--) {
        for(let j = nums.length - 1; j > i; j--) {
            dp[i][j] = dp[i+1][j] + nums[i];
            if(k === 0) {
                if(dp[i][j] === 0) {
                    return true;
                }
            } else {
                if(dp[i][j] % k === 0) {
                    return true;
                }    
            }
            
        }
    }
    return false;
};
*/