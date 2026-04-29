// Last updated: 4/29/2026, 10:33:30 AM
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    const hash = {};
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(let i = 0; i < alphabet.length; i++) {
        hash[i+1] = alphabet[i];
    }
    let output = '';
    let num = n;
    while(num !== 0) {
        remainder = num % 26;
        if(remainder === 0) {
            remainder = 26;
        }
        output = hash[remainder] + output;
        num = (num - remainder) / 26;
    }
    return output;
};