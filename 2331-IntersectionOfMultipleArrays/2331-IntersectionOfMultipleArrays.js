// Last updated: 4/29/2026, 10:21:02 AM
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
// T=19:12s
// TC=O(n) (n: total number of all the numbers)
// SC=O(m) (m: max number of characters)
var intersection = function(nums) {
    if(nums.length === 1) {
        return nums[0].sort((a, b) => a - b);
    }
    let map = createMap(nums[0]);
    for(let i = 1; i < nums.length; i++) {
        const arr = nums[i];
        const newMap = {};
        for(const num of arr) {
            if(map[num]) {
                newMap[num] = true;
            }
        }
        map = newMap;
    }
    const keys = Object.keys(map).map(str => parseInt(str));
    
    const sorted =  keys.sort((a, b) => a - b);
    console.log(sorted);
    
    return sorted;
};

function createMap(arr) {
    const map = {};
    for(const num of arr) {
        if(map[num] === undefined) {
            map[num] = true;
        } 
    }
    return map;
}

// 2022-11-15
// O(n)
// O(n)
var intersection = function(nums) {
    const map = {};
    for(const arr of nums) {
        for(const num of arr) {
            if(map[num] === undefined) {
                map[num] = 1;
            } else {
                map[num]++;
            }
        }
    }
    
    const keys = Object.keys(map);
    const res = keys.filter(key => map[key] === nums.length).sort((a, b) => a - b);
    return res;
};