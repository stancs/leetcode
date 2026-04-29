// Last updated: 4/29/2026, 10:30:01 AM
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// 4:42s
// O(1) time | O(1) space
var hammingDistance = function(x, y) {
    const binaryX = getBinary(x);
    const binaryY = getBinary(y);
    let count = 0;
    for(let i = 0; i < 32; i++) {
        if(binaryX[i] !== binaryY[i]) {
            count++;
        }
    }
    return count;
};

function getBinary(n) {
    const binary = [];
    let quotient = n;
    let remainder;
    while(quotient !== 0) {
        remainder = quotient % 2;
        binary.unshift(remainder);
        quotient = (quotient - remainder) / 2;
    }
    while(binary.length !== 32) {
        binary.unshift(0);
    }
    return binary;
}