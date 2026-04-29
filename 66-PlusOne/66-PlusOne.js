// Last updated: 4/29/2026, 10:35:25 AM
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const outputDigits = [];
    let carryout = 1;
    for(let i = digits.length - 1; i >= 0; i--) {
        const num = digits[i];
        let output = num + carryout;
        carryout = Math.floor(output / 10);
        output = output % 10;
        outputDigits.push(output)
    }
    if(carryout !== 0) {
        outputDigits.push(carryout);
    }
    return outputDigits.reverse();
};