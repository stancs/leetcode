// Last updated: 4/29/2026, 10:36:16 AM
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var nextPermutation = function(nums) {
    if(!nums || nums.length === 0) {
        return [];
    }
    const idx1 = findFirstIncreasing(nums);
    console.log(`idx1 = ${idx1}`);
    if(idx1 !== -1) {
        const subArr1 = nums.slice(idx1);
        const idx2 = findLeastNum(nums, idx1, nums[idx1]);
        console.log(`idx2 = ${idx2}`);
        swap(nums, idx1, idx2);
        console.log(`nums = ${nums}`);
        const subArr2 = nums.slice(idx1 + 1);
        reverse(subArr2, 0, subArr2.length - 1);
        for(let i = idx1 + 1; i < nums.length; i++) {
            nums[i] = subArr2[i - (idx1 + 1)];
        }
    } else {
        reverse(nums, 0, nums.length - 1);
    }
}

function findFirstIncreasing(nums) {
    for(let i = nums.length - 1; i >= 1; i--) {
        if(nums[i-1] < nums[i]) {
            return i - 1;
        }
    }
    return -1;
}

function findLeastNum(nums, idx1, val) {
    let idx;
    let min = Infinity;
    for(let i = nums.length - 1; i >= idx1 + 1; i--) {
        const num = nums[i];
        if(num > val) {
            if(num < min) {
                min = num;
                idx = i;
            }
        }
    }
    return idx;
}

function swap(nums, idx1, idx2) {
    const tmp = nums[idx1];
    nums[idx1] = nums[idx2];
    nums[idx2] = tmp;
}

function reverse(arr, begin, end) {
    let l = begin;
    let r = end;
    while(l < r) {
        const tmp = arr[r];
        arr[r] = arr[l];
        arr[l] = tmp;
        l++;
        r--;
    }
}