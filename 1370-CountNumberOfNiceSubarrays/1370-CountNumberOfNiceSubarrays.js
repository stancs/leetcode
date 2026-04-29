// Last updated: 4/29/2026, 10:24:48 AM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let left = 0;
    let curr = 0;
    let ans = 0;
    for(let right = 0; right < nums.length; right++) {
        const num = nums[right];
        if(num % 2 === 1) {
            curr++;
        }
        while(curr > k) {
            if(nums[left] % 2 === 1) {
                curr--;
            }
            left++;
        }
        if(curr === k) {
            ans++;
        }
    }
    return ans;
};

var numberOfSubarrays = function(nums, k) {
    let counts = new Map();
    counts.set(0, 1);
    let ans = 0, curr = 0;
    
    for (const num of nums) {
        curr += num % 2;
        ans += counts.get(curr - k) || 0;
        counts.set(curr, (counts.get(curr) || 0) + 1);
    }
    
    return ans;
};