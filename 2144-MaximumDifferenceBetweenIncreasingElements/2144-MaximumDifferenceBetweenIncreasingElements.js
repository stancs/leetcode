// Last updated: 4/29/2026, 10:21:49 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let min = Number.MAX_VALUE;
    let max = -Number.MAX_VALUE;
    console.log(max);
    for(const num of nums) {
        if(num < min) {
            min = num;
        }    
        const diff = num - min;
        if(diff > max) { 
            max = diff;
        }
        console.log(`max: ${max}, min: ${min}, diff: ${diff}`);
    }
    return max > 0? max: -1;
};