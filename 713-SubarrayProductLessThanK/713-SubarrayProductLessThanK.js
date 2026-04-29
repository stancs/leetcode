// Last updated: 4/29/2026, 10:28:31 AM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    const n = nums.length;
    let count = 0;
    for(let i = 0; i < n; i++) {
        let products = 1;
        for(let j = i; j < n; j++) {
            products *= nums[j];
            if(products < k) {
                // console.log(`[${i},${j}]`)
                count++;
            }
        }
    }
    return count;
};

var numSubarrayProductLessThanK = function(nums, k) {
    const n = nums.length;
    let count = 0;
    for(let i = 0; i < n; i++) {
        let products = 1;
        for(let j = i; j < n; j++) {
            products *= nums[j];
            if(products < k) {
                // console.log(`[${i},${j}]`)
                count++;
            } else {
                break;
            }
        }
    }
    return count;
};