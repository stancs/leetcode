// Last updated: 4/29/2026, 10:24:50 AM
/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    const alpha1 = 'abcdefghijklmnopqrstuvwxyz';
    const alpha2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const hash = {};
    const arr1 = alpha1.split('');
    const arr2 = alpha2.split('');
    for(let i = 0; i < arr1.length; i++) {
        hash[arr1[i]] = i;
        hash[arr2[i]] = 100 + i;
    }
    console.log(hash);
    const arr = [];
    const hash2 = {};
    let res = '';
    let max = 99;
    for(const ch of s) {
        const val = hash[ch];
        if(val < 100) {
            if(hash2[val + 100] && (val + 100) > max) {
                max = val + 100;
                res = alpha2[val];
            }
        } else {
            if(hash2[val - 100] && val > max) {
                max = val;
                res = alpha2[val - 100];
            }
        }
        hash2[val] = true;
    }
    return res;
};