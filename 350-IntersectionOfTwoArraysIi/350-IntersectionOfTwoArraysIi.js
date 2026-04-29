// Last updated: 4/29/2026, 10:30:52 AM
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = {};
    for(const num1 of nums1) {
        if(map[num1] === undefined) {
            map[num1] = 1;
        } else {
            map[num1]++;
        }
    }
    console.log(map);
    const res = [];
    for(const num2 of nums2) {
        if(map[num2] > 0) {
            res.push(num2);
            map[num2]--;
        }
    }
    return res;
};