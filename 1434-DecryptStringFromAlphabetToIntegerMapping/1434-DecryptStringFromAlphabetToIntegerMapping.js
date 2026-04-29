// Last updated: 4/29/2026, 10:24:20 AM
/**
 * @param {string} s
 * @return {string}
 */
// 22:47s
// O(n) time | O(1) space
var freqAlphabets = function(s) {
    const hash = {};
    const base = 'a'.charCodeAt(0) - 1;
    for(let i = 1; i <= 26; i++) {
        const num = base + i;
        const key = i >= 10? i.toString() + '#': i.toString();
        const char = String.fromCharCode(num);
        hash[key] = char;
    }
    // console.log(hash);
    let idx = 0;
    let output = '';
    while(idx < s.length) {
        const str = s.slice(idx, idx + 3);
        if(str.length === 3 && str[2] === '#') {
            output += hash[str];
            idx += 3;
        } else {
            output += hash[str[0]];
            idx++;
        }
    }
    return output;
};