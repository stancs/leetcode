// Last updated: 4/29/2026, 10:22:20 AM
/**
 * @param {string} s
 * @return {boolean}
 */
// 2022-12-06
// 11:19s
// O(n)
// O(1);
var checkZeroOnes = function(s) {
    if(s.length === 0) {
        return false;
    }
    if(s.length === 1) {
        return s[0] === '1';
    }
    let lenZero = 0;
    let lenOne = 0;
    if(s[0] === '1') {
        lenOne = 1;
    } else {
        lenZero = 1;
    }
    let maxLenOne = 0;
    let maxLenZero = 0;
    for(let i = 1; i < s.length; i++) {
        if(s[i-1] === s[i]) {
            if(s[i] === '1') {
                lenOne++;  
            } else {
                lenZero++;
            }
        } else {
            if(s[i] === '1') {
                lenOne = 1;
            } else {
                lenZero = 1;
            }
        }
        if(lenOne > maxLenOne) {
            maxLenOne = lenOne;
        }
        if(lenZero > maxLenZero) {
            maxLenZero = lenZero;
        }
        console.log(`lenZero: ${lenZero}, maxZero: ${maxLenZero}`);
        console.log(`lenOne: ${lenOne}, maxOne: ${maxLenOne}`);
    }
    return maxLenOne > maxLenZero;
};