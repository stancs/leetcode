// Last updated: 4/29/2026, 10:20:54 AM
/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
    let maxLen = 0;
    const calculateBitwiseAnd = arr => {
        if(arr.length === 0) {
            return 0;
        }
        let val = arr[0];
        for(let i = 1; i < arr.length; i++) {
            val = val & arr[i];
        }
        return val;
    }
    const getCb = (arr, remains) => {
        const val = calculateBitwiseAnd(arr);
        if(val > 0 && arr.length > maxLen) {
            maxLen = arr.length;
        }
        for(let i = 0; i < remains.length; i++) {
            const item = remains[i];
            const nextArr = arr.concat(item);
            const nextRemains = remains.slice(i+1);
            getCb(nextArr, nextRemains);
        }
    }
    getCb([], candidates);
    return maxLen;
};

var largestCombination = function(candidates) {
    let max = 0;
    for(let i = 0; i < 32; i++) {
        let count = 0;
        for(const num of candidates) {
            const val = num >> i & 1;
            if(val > 0) {
                count++;
            }
        }
        if(count > max) {
            max = count;
        }
    }
    return max;
}