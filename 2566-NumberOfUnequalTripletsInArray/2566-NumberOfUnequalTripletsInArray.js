// Last updated: 4/29/2026, 10:20:13 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
    const hash = {};
    for(const num of nums) {
        if(hash[num] === undefined) {
            hash[num] = 1;    
        } else {
            hash[num]++;
        }
    }
    console.log(hash);
    const values = Object.values(hash);
    if(values.length < 3) {
        return 0;
    }
    // let num = 1;
    // for(const value of values) {
    //     num *= value;
    // }
    // return num;
    let sum = 0;
    for(let i = 0; i < values.length - 2; i++) {
        for(let j = i + 1; j < values.length - 1; j++) {
            for(let k = j + 1; k < values.length; k++) {
                sum += values[i] * values[j] * values[k];
            }
        }
    }
    return sum;
};