// Last updated: 4/29/2026, 10:33:12 AM
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    const output = [];
    let curr = n;
    while(curr > 0) {
        const remainder = curr % 2;
        output.push(remainder);
        curr = (curr - remainder) / 2;
    }
    const num1Bits = output.reduce((acc, curr) => {
        // if(curr === 1) {
        //     return acc + 1;
        // } else {
        //     return acc;
        // }
        return acc + curr;
    }, 0);

    return num1Bits;
};