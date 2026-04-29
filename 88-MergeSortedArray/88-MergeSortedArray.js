// Last updated: 4/29/2026, 10:34:58 AM
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    const arr1 = nums1.slice(0, m);
    const arr2 = nums2;
    let idx = 0;
    while(arr1.length > 0 || arr2.length > 0) {
        console.log(`nums1: `, nums1);
        console.log('idx: ', idx);
        const len1 = arr1.length;
        const len2 = arr2.length;
        if(len1 === 0) {
            nums1[idx] = arr2[0];
            idx++;
            arr2.shift();
            continue;
        } else if(len2 === 0) {
            nums1[idx] = arr1[0];
            idx++;
            arr1.shift();
            continue;
        }
        const n1 = arr1[0];
        const n2 = arr2[0];
        if(n1 > n2) {
            nums1[idx] = n2;
            idx++;
            arr2.shift();
        } else {
            nums1[idx] = n1;
            idx++;
            arr1.shift();
        }
    }
};