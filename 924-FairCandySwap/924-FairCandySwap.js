// Last updated: 4/29/2026, 10:26:58 AM
/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    let sum1 = 0;
    let sum2 = 0;
    const hash = {};
    for(const num of aliceSizes) {
        sum1 += num;
    }
    for(const num of bobSizes) {
        sum2 += num;
        hash[num] = true;
    }
    const target = (sum1 + sum2) / 2
    for(const num of aliceSizes) {
        const diff1 = target - sum1;
        const key1 = num + diff1;
        if(hash[key1]) {
            const diff2 = target - sum2;
            const key2 = key1 + diff2;
            if(num === key2) {
                return [num, key1];
            }
        }
    }
};