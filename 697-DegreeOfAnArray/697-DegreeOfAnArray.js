// Last updated: 4/29/2026, 10:28:35 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    const map1 = {}, map2 = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map1[num] === undefined) {
            map1[num] = 1;
            map2[num] = [i];
        } else {
            map1[num]++;
            map2[num].push(i);
        }
    }
    console.log(map1);
    console.log(map2);
    const values = Object.values(map1);
    const degree = Math.max(...values);
    console.log('degree:', degree)
    const keys = Object.keys(map1);
    let min = Infinity;
    for (const key of keys) {
        if (map1[key] === degree) {
            const arr = map2[key];
            const idx1 = arr[0];
            const idx2 = arr[arr.length - 1];
            const len = idx2 - idx1 + 1;
            min = Math.min(len, min);
        }
    }
    return min;
};