// Last updated: 4/29/2026, 10:20:34 AM
/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
// 2022-11-12
// 11:49s
// O(n)
// O(n)
var arithmeticTriplets = function(nums, diff) {
    const map = {};
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        map[num] = i;
    }
    console.log(map);
    let count = 0;
    for(let i = 1; i < nums.length - 1; i++) {
        const num2 = nums[i];
        const num1 = num2 - diff;
        const num3 = num2 + diff;
        const idx1 = map[num1];
        const idx3 = map[num3];
        if((idx1 !== undefined) && idx1 < i && (idx3 !== undefined) && idx3 > i) {
            console.log(`${idx1}-${i}-${idx3}`);
            count++;
        }
    }
    return count;
};