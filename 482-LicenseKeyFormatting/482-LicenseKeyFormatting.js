// Last updated: 4/29/2026, 10:29:56 AM
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    console.log(`s: ${s}, k=${k}`);
    const arr = s.toUpperCase().split('').filter(ch => ch !== '-');
    console.log(arr);
    let res = '';
    let count = 0;
    let tmpStr = '';
    for(let i = arr.length - 1; i >= 0; i--) {
        tmpStr = arr[i] + tmpStr;
        count++;
        if(count === k) {
            if(res.length !== 0) {
                res = tmpStr + '-' + res;
            } else {
                res = tmpStr;
            }
            tmpStr = '';
            count = 0;
        }
    }
    if(tmpStr.length > 0) {
        if(res.length !== 0) {
            res = tmpStr + '-' + res;
        } else {
            res = tmpStr;
        }
    }
    return res;
};