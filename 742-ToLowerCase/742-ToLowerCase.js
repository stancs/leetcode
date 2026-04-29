// Last updated: 4/29/2026, 10:28:13 AM
/**
 * @param {string} str
 * @return {string}
 */
// 9:01s
// O(n) time | O(1) space
var toLowerCase = function(str) {
    let output = '';
    const diff = 'a'.charCodeAt(0) - 'A'.charCodeAt(0);
    for(const char of str) {
        if(char >= 'A' && char <= 'Z') {
            output = output + String.fromCharCode(char.charCodeAt(0) + diff);
        } else {
            output = output + char;
        }
    }
    return output;
};