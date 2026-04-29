// Last updated: 4/29/2026, 10:24:24 AM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 30:44s
// O(n) time | O(1) space
var isPossibleDivide = function(nums, k) {
    if(nums.length % k !== 0) {
        return false;
    }
    
    const hash = {};
    for(const num of nums) {
        if(hash[num]) {
            hash[num]++;
        } else {
            hash[num] = 1;
        }
    }
    console.log(hash);
    
    let keys = Object.keys(hash);
    while(keys.length !== 0) {
        const min = Math.min(...keys);
        console.log(`min: ${min}`);
        for(let i = 0; i < k; i++) {
            if(hash[min + i] === undefined) {
                return false;
            } else {
                if(hash[min + i] > 1) {
                    hash[min + i]--;
                } else if(hash[min + i] === 1) {
                    delete hash[min + i];
                }    
            }
        }
        keys = Object.keys(hash);
    }
    return true;
};