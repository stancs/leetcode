// Last updated: 4/29/2026, 10:29:39 AM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    const sorted = nums.sort((a, b) => a - b);
    const map = {};
    for(const num of sorted) {
        if(map[num] === undefined) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    }
    console.log(map);
    let count = 0;
    const hash = {};
    for(const num of sorted) {
        const target = num + k;
        if(map[target] !== undefined && map[target] !== 0) {
            if(k === 0 && map[target] === 1) {
                continue;
            }
            const str = `${num},${target}`;
            if(hash[str] === undefined) {
                hash[str] = true;
                map[target]--;
                map[num]--;
                count++;
            }
        }
    }
    return count;
};