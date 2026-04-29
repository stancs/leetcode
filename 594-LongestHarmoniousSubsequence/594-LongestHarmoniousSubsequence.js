// Last updated: 4/29/2026, 10:29:13 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
// 2022-10-30
// 20:00s
// O(n*log(n))
// O(1)
var findLHS = function(nums) {
    let leftIdx = 0;
    let maxLen = 0;
    console.log(nums);
    nums.sort((a, b) => a - b);
    console.log(nums);
    let rightIdx = 0;
    while(rightIdx < nums.length) {
        const left = nums[leftIdx];
        const right = nums[rightIdx];
        if(right - left === 1) {
            const currLen = rightIdx - leftIdx + 1;
            if(maxLen < currLen) {
                maxLen = currLen;
            }
            rightIdx++;
        } else if(right - left === 0) {
            rightIdx++;
        } else {
            leftIdx++;
        }
    }
    return maxLen;
};

// 2022-10-30
// 5:00s
// O(n)
// O(1)
var findLHS = function(nums) {
    const map = {};
    for(const num of nums) {
        if(map[num] === undefined) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    }
    console.log(map);
    const keys = Object.keys(map).map(strKey => parseInt(strKey));
    let maxLen = 0;
    for(const key of keys) {
        if(map[key + 1] !== undefined) {
            const len = map[key + 1] + map[key];
            if(maxLen < len) {
                maxLen = len;
            }
        }
    }
    return maxLen;
}