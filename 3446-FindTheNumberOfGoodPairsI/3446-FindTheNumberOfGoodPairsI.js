// Last updated: 5/13/2026, 12:12:46 AM
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    const n = nums1.length;
    const m = nums2.length;
    let count = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            const i1 = nums1[i];
            const i2 = nums2[j];
            if(i1 % (i2 * k) === 0) {
                count++;
            }
        }
    }
    return count;
};