// Last updated: 4/29/2026, 10:21:01 AM
/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    const idxList = [];
    for(let i = 0; i < number.length; i++) {
        const ch = number[i];
        if(ch === digit) {
            idxList.push(i);
        }
    }
    let maxStr = '';
    for(const idx of idxList) {
        const newNumStr = number.slice(0, idx).concat(number.slice(idx+1));
        if(compare(newNumStr, maxStr) > 0) {
            maxStr = newNumStr;
        }
    }
    return maxStr;
};

function compare(numStr1, numStr2) {
    const len1 = numStr1.length;
    const len2 = numStr2.length;
    if(len1 > len2) {
        return 1;
    } else if(len1 < len2) {
        return -1;
    } else {
        for(let i = 0; i < len1; i++) {
            if(numStr1[i] !== numStr2[i]) {
                return parseInt(numStr1[i]) - parseInt(numStr2[i]);
            }
        }
        return 0;
    }
}