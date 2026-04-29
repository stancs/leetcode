// Last updated: 4/29/2026, 10:35:22 AM
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const revA = a.split('').reverse().map(ch => parseInt(ch));
    const revB = b.split('').reverse().map(ch => parseInt(ch));
    const maxLen = Math.max(revA.length, revB.length);
    const output = new Array(maxLen).fill(0);
    let carryover = 0;
    for(let i = 0; i < maxLen; i++) {
        const p = i < revA.length? revA[i]: 0;
        const q = i < revB.length? revB[i]: 0;
        const sum = p + q + carryover;
        if(sum >= 2) {
            carryover = 1;
            output[i] = sum % 2;
        } else {
            carryover = 0;
            output[i] = sum;
        }
    }
    if(carryover > 0) {
        output.push(carryover);
    }
    return output.reverse().join('');

};