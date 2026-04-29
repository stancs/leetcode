// Last updated: 4/29/2026, 10:36:20 AM
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// O(log(n)) time | O(log(n)) space
var divide = function(dividend, divisor) {
    if(dividend === 0) {
        return 0;
    }
    
    const sign1 = dividend > 0? 1: -1;
    const sign2 = divisor > 0? 1: -1;
    const outputSign = sign1 * sign2;
    
    let absDividend = Math.abs(dividend);
    const absDivisor = Math.abs(divisor);
    
    const expArr = [];
    const quoArr = [];
    let num = absDivisor;
    let quo = 1;
    while(num <= absDividend) {
        expArr.push(num);
        quoArr.push(quo);
        num = num + num;
        quo = quo + quo;
    }
    console.log(expArr);
    console.log(quoArr);
    
    let sum = 0; 
    let count = 0;
    let idx = expArr.length - 1;
    while(absDividend >= 0 && idx >= 0) {
        if(absDividend >= expArr[idx]) {
            absDividend -= expArr[idx];
            count += quoArr[idx];
        } else {
            idx--;
        }
    }
    const output = outputSign > 0? count: -count;
    
    if(output >= -Math.pow(2, 31) && output <= Math.pow(2, 31) - 1) {
        return output;
    } else {
        return Math.pow(2, 31) - 1;
    }
};
