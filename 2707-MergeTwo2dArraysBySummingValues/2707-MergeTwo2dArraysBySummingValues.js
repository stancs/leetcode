// Last updated: 5/13/2026, 12:13:05 AM
/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    let i = 0, j = 0;
    const res = [];
    const map = {};
    for(const [id1, val1] of nums1) {
        if(map[id1] === undefined) {
            map[id1] = val1;
        } else {
            map[id1] += val1;
        }
    }
    for(const [id2, val2] of nums2) {
        if(map[id2] === undefined) {
            map[id2] = val2;
        } else {
            map[id2] += val2;
        }
    }
    const keys = Object.keys(map).map(str => Number(str));
    keys.sort((a, b) => a - b);
    for(const key of keys) {
        const val = map[key];
        res.push([key, val]);
    }
    return res;
};