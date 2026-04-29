// Last updated: 4/29/2026, 10:36:44 AM
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const minLen = Math.min(...strs.map(str => str.length));
    console.log(minLen);
    let prefix = '';
    for(let i = 0; i < minLen; i++) {
        const ch = strs[0][i];
        console.log(`ch=${ch}`)
        let res = true;
        for(let j = 1; j < strs.length; j++) {
            const str = strs[j];
            if(ch !== str[i]) {
                res = false;
                break;
            }
        }
        console.log(`res=${res}`)
        if(res) {
            prefix += ch;
        } else {
            break;    
        }
    }
    return prefix;
};