// Last updated: 4/29/2026, 10:19:02 AM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const numToArr = n => {
        const arr = [];
        let curr = n;
        while(curr !== 0) {
            const remainder = curr % 2;
            arr.push(remainder);
            curr = (curr - remainder) / 2;
        }
        return arr;
    }
    const len = nums.length;
    const binaryList = [];
    let maxLen = 0;
    for(const num of nums) {
        const arr = numToArr(num);
        if(arr.length > maxLen) {
            maxLen = arr.length;
        }
        // console.log(arr);
        binaryList.push(arr);
    }
    const kArr = numToArr(k);
    // console.log(`k = ${kArr}`)
    if(kArr.length > maxLen) {
        maxLen = kArr.length;
    }
    let count = 0;
    for(let i = 0; i < maxLen; i++) {
        const target = i < kArr.length? kArr[i]: 0;
        let countOnes = 0;
        for(let j = 0; j < binaryList.length; j++) {
            const arr = binaryList[j];
            let digit = (i < arr.length)? arr[i]: 0;
            if(digit === 1) {
                countOnes++;
            }
        }
        if(countOnes % 2 !== target) {
            count++;
        }
    }
    return count;
};