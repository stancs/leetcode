// Last updated: 4/29/2026, 10:29:52 AM
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    // num2: put the value into hash: { [value]: idx }
    // for each value in num1, find the index in num2
    // after finding that index, find the great element
    const hash = {};
    for(let i = 0; i < nums2.length; i++) {
        const num = nums2[i];
        hash[num] = i;
    }
    console.log(hash);
    
    const output = [];
    for(const num1 of nums1) {
        const idx = hash[num1];
        let isFound = false;
        for(let i = idx + 1; i < nums2.length; i++) {
            if(nums2[i] > num1) {
                output.push(nums2[i]);
                isFound = true;
                break;
            }
        }
        if(!isFound) {
            output.push(-1);
        }
    }
    return output;
};