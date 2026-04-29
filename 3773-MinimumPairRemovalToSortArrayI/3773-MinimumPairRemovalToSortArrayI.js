// Last updated: 4/29/2026, 10:18:57 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    const isNonDec = arr => {
        for(let i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i+1]) {
                return false;
            }
        }
        return true;
    }

    let arr = nums;
    let count = 0;
    while(!isNonDec(arr)) {
        console.log('arr:', arr);
        let min = Infinity;
        let idx = -1;
        for(let i = 0; i < arr.length - 1; i++) {
            const sum = arr[i] + arr[i+1];
            if(sum < min) {
                min = sum;
                idx = i;
            }
        }
        const newArr = [...arr.slice(0, idx), min, ...arr.slice(idx+2)];
        arr = newArr;
        count++;
    }
    return count;
};