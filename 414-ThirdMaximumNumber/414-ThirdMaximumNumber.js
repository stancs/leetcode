// Last updated: 4/29/2026, 10:30:28 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const hash = {};
    const nums2 = [];
    for(const num of nums) {
        if(hash[num] === undefined) {
            nums2.push(num);
            hash[num] = true;
        } 
    }
    console.log(nums2);
    if(nums2.length === 1) {
        return nums2[0];
    } else if(nums2.length === 2) {
        return Math.max(nums2[0], nums2[1]);
    }
    return nums2.sort((a, b) => b-a)[2];
};