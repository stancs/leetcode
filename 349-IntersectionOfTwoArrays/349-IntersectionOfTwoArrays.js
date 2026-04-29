// Last updated: 4/29/2026, 10:30:53 AM
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const map = {};
    for(const num1 of nums1) {
        if(map[num1] === undefined) {
            map[num1] = true;
        }
    }
    console.log(map);
    const set = new Set();
    for(const num2 of nums2) {
        if(map[num2]) {
            set.add(num2);
        }
    }
    return [...set];
};