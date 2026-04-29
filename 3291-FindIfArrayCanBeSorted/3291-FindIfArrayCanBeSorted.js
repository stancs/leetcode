// Last updated: 4/29/2026, 10:19:00 AM
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function(nums) {
    function getBitSet(num) {
        let count = 0;
        for(let i = 0; i < 32; i++) {
            const val = num >> i & 1;
            if(val > 0) {
                count++;
            }
        }
        return count;
    }
    const map = {};
    for(const num of nums) {
        const bitSet = getBitSet(num);
        map[num] = bitSet;
    }
    const nums2 = nums.map(item => map[item]);
    console.log(nums2);
    // for(let i = 0; i < nums.length - 1; i++) {
    //     console.log(nums);
    //     const n1 = nums[i];
    //     const n2 = nums[i+1];
    //     if(map[n1] === map[n2]) {
    //         const max = Math.max(n1, n2);
    //         const min = Math.min(n1, n2);
    //         nums[i] = min;
    //         nums[i+1] = max;
    //     }
    // }
    let idx = 0;
    while(idx < nums2.length) {
        let len = 1;
        const initVal = nums2[idx];
        while(idx + len < nums2.length && nums2[idx + len] === initVal) {
            len++;
        }
        if(len > 1) {
            const partialArr = nums.slice(idx, idx + len);
            const sorted = partialArr.sort((a, b) => a - b);
            for(let j = idx; j < idx + len; j++) {
                nums[j] = sorted[j - idx];
            }
        }
        idx = idx + len;
    }
    const sorted = nums.slice().sort((a, b) => a - b);
    
    console.log('nums:', nums);
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== sorted[i]) {
            return false;
        }
    }
    return true;
};