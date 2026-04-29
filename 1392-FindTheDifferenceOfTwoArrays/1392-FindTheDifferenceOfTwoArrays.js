// Last updated: 4/29/2026, 10:24:38 AM
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const map1 = {}, map2 = {};
    const dist1 = [], dist2 = [];
    for(const num1 of nums1) {
        if(map1[num1] === undefined) {
            map1[num1] = true;
            dist1.push(num1);
        }
    }
    for(const num2 of nums2) {
        if(map2[num2] === undefined) {
            map2[num2] = true;
            dist2.push(num2);
        }
    }
    console.log(map1);
    console.log(map2);
    const a1 = [], a2 = [];
    for(const num1 of dist1) {
        if(map2[num1] === undefined) {
            a1.push(num1);
        }
    }
    for(const num2 of dist2) {
        if(map1[num2] === undefined) {
            a2.push(num2);
        }
    }
    console.log(a1, a2);
    return [a1, a2];
};