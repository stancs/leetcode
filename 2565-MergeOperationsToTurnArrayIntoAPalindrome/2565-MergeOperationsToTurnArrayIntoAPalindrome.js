// Last updated: 4/29/2026, 10:20:14 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let p = 0;
    let q = nums.length - 1;
    let s1 = nums[p];
    let s2 = nums[q];
    let count = 0;
    while(p + 1 < q) {
        // console.log(`p: ${p}, q: ${q}`);
        // console.log(`s1: ${s1}, s2: ${s2}`);
        if(s1 === s2) {
            // console.log('s1 === s2')
            p++;
            q--;
            s1 = nums[p];
            s2 = nums[q];
        } else if(s1 < s2) {
            // console.log('s1 < s2')
            p++;
            s1 += nums[p]; 
            count++;
        } else {
            // console.log('s1 > s2')
            q--;
            s2 += nums[q];
            count++;
        }
    }
    if(s1 !== s2) {
        count++;
    }
    return count;
};