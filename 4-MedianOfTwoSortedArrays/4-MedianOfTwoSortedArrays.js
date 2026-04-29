// Last updated: 4/29/2026, 10:36:56 AM
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const totalLen = nums1.length + nums2.length;
    let newNums = [];
    let idx = 0;
    const medianIdx = Math.floor(totalLen / 2);
    while(idx <= medianIdx) {
        if(nums1.length > 0 && nums2.length > 0) {
            if(nums1[0] < nums2[0]) {
                newNums.push(nums1.shift());
            } else {
                newNums.push(nums2.shift());
            }
        } else if(nums1.length === 0) {
            newNums = newNums.concat(nums2);
        } else {
            newNums = newNums.concat(nums1);
        }
        idx++;
    }
    if(totalLen % 2 === 1) {
        return newNums[medianIdx];
    } else {
        return (newNums[medianIdx- 1] + newNums[medianIdx])/2
    }
};